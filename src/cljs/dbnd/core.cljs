(ns dbnd.core
  (:require
   [reagent.core :as reagent :refer [atom]]
   [reagent.session :as session]
   [reitit.frontend :as reitit]
   [clerk.core :as clerk]
   [accountant.core :as accountant]
   [cljs-http.client :as http]
   [cljs.core.async :refer [<! take!]]
   [cljs.reader :as reader])
  (:require-macros
    [cljs.core.async.macros :refer [go]]))

;; -------------------------
;; Routes

(def router
  (reitit/router
   [["/" :index]
    ["/items"
     ["" :items]
     ["/:item-id" :item]]
    ["/heroes"
     ["" :heroes]
     ["/:hero-id" :hero]]
    ["/patrons"
     ["" :patrons]
     ["/:patron-id" :patron]]
    ["/about" :about]]))

(defn path-for [route & [params]]
  (if params
    (:path (reitit/match-by-name router route params))
    (:path (reitit/match-by-name router route))))

(path-for :about)
;;-------------------------
;; Data helpers
(def api-path "http://localhost:3449/api/")

(defn atom-from-api 
  ([inp-url]
   (atom-from-api inp-url {}))
  ([inp-url options]
   (let [response-atom (atom nil)
         request-chan (http/get (str api-path inp-url) options)
         _swap-atom (take! request-chan 
                           #(reset! response-atom 
                                   (reader/read-string (:body %))))]
    response-atom)))

;; -------------------------
;; Page components

(defn home-page []
  (fn []
    [:span.main
     [:div.container
      [:h1 "Welcome to DBnD"]
      [:p.flow-text "DBnD is the premiere fictional services exchange. Here, bold heroes can find wise mentors, accept perilous quests, and recieve their just rewards."]]]))

(defn about-page []
  (fn [] [:div.container
            [:h1 "About dbnd"]
            [:p.flow-text "DBnD is the premiere fictional services exchange. Here, bold heroes can find wise mentors, accept perilous quests, and recieve their just rewards."]
           [:div.row 
            [:div.col.s4
              [:h3.center-align "Heroes"]
              [:p.flow-text
               "Browse the realms heroes, see their names written down in glory, and their availibility in simple terms"]]
            [:div.col.s4
             [:h3.center-align "Patrons"]
             [:p.flow-text 
              "The high and mighty, the lowly and destitute, all united by that little icon over their heads"]]
            [:div.col.s4
             [:h3.center-align "Quests"]
             [:p.flow-text "You never forget the rats in the basement, even as you secure the final McGuffin"]]]]))


(defn navbar []
  (fn [] [:nav
          [:div.nav-wrapper
           [:a]
           [:ul#nav-mobile.left.hide-on-med-and-down
            [:li
             [:a {:href (path-for :index)}"Home"]] 
            [:li
             [:a {:href (path-for :heroes)}"Heroes"]]
            [:li
             [:a {:href (path-for :patrons)} "Patrons"]]
            [:li 
             [:a {:href (path-for :about)} "About"]]]]]))

(defn fetch-heroes-data []
  (let [fetching-atom (atom #{})
        _  (take! (http/get "http://localhost:3449/api/heroes")
                  #(reset! fetching-atom (reader/read-string (:body %))))]
   fetching-atom))


(defn heroes-page []
  (let [heroes-data (atom-from-api "heroes")]
    (fn []
      [:div.container
       [:h1 "Heroes"]
       [:ul.collection
        (map (fn [hero]
              [:li.collection-item
               [:a 
                {:key (:hero-id hero)
                 :href (path-for :hero {:hero-id (:hero-id hero)})}
                (:hero-name hero)]])
         @heroes-data)]])))


(defn hero-page [] 
   (let [routing-data (session/get :route)
         hero (get-in routing-data [:route-params :hero-id])
         hero-data (atom-from-api (str "heroes/" hero))]
    (fn []   
       [:div.container
        [:div.card
         [:div.card-content
          [:span.card-title (:hero-name @hero-data)]
          [:p (str (:hero-race @hero-data) " " (:hero-class @hero-data))]
          [:p.flow-text (:hero-bio @hero-data)]]]])))

        
(defn patrons-page []
  (let [patrons-data (atom-from-api "patrons")]
    (fn []
      [:div.container
       [:h1 "Patrons"]
       [:ul.collection
        (map (fn [patron]
               [:li.collection-item
                [:a {:key (:patron-id patron)
                     :href (path-for :patron {:patron-id (:patron-id patron)})}
                 (:patron-name patron)]])
             @patrons-data)]])))

(defn patron-page [] 
    (let [routing-data (session/get :route)
          patron (get-in routing-data [:route-params :patron-id])
          patron-data (atom-from-api (str "patrons/" patron))]
     (fn []   
        [:div.container
         [:div.card
          [:div.card-content
           [:span.card-title (:patron-name @patron-data)]
           [:p (str (:patron-location @patron-data))]
           [:p.flow-text (:patron-notes @patron-data)]]]])))


;; -------------------------
;; Translate routes -> page components


(defn page-for [route]
  (case route
    :index #'home-page
    :about #'about-page
    :hero #'hero-page
    :heroes #'heroes-page
    :patrons #'patrons-page
    :patron #'patron-page))


;; -------------------------
;; Page mounting component


(defn current-page []
  (fn []
    (let [page (:current-page (session/get :route))]
      [:div
       [navbar]
       [page]
       [:footer
        [:p "dbnd was generated by the "
         [:a {:href "https://github.com/reagent-project/reagent-template"} "Reagent Template"] "."]]])))

;; -------------------------
;; Initialize app

(defn mount-root []
  (reagent/render [current-page] (.getElementById js/document "app")))

(defn init! []
  (clerk/initialize!)
  (accountant/configure-navigation!
   {:nav-handler
    (fn [path]
      (let [match (reitit/match-by-path router path)
            current-page (:name (:data  match))
            route-params (:path-params match)]
        (reagent/after-render clerk/after-render!)
        (session/put! :route {:current-page (page-for current-page)
                              :route-params route-params})
        (clerk/navigate-page! path)))

    :path-exists?
    (fn [path]
      (boolean (reitit/match-by-path router path)))})
  (accountant/dispatch-current!)
  (mount-root))
