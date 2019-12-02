(ns dbnd.core
  (:require
   [reagent.core :as reagent :refer [atom]]
   [reagent.session :as session]
   [reitit.frontend :as reitit]
   [clerk.core :as clerk]
   [accountant.core :as accountant]))

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
    ["/about" :about]]))

(defn path-for [route & [params]]
  (if params
    (:path (reitit/match-by-name router route params))
    (:path (reitit/match-by-name router route))))

(path-for :about)
;; -------------------------
;; Page components

(defn home-page []
  (fn []
    [:span.main
     [:div.container
      [:h1 "Welcome to DBnD"]
      [:p.flow-text "DBnD is the premiere fictional services exchange. Here, bold heroes can find wise mentors, accept perilous quests, and recieve their just rewards."]]]))

(defn items-page []
  (fn []
    [:div.container
     [:h1 "The items of dbnd"]
     [:ul.collection (map (fn [item-id]
                 [:a.collection-item {:href (path-for :item {:item-id item-id}) :key (str "item-" item-id)}  "Item: " item-id])
               (range 1 6))]]))

(defn item-page []
  (fn []
    (let [routing-data (session/get :route)
          item (get-in routing-data [:route-params :item-id])]
      [:div.container
       [:h1 (str "Item " item " of dbnd")]
       [:p [:a {:href (path-for :items)} "Back to the list of items"]]])))

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
             [:a {:href (path-for :items)}"Items"]]
            [:li
             [:a {:href (path-for :heroes)}"Heroes"]]
            [:li 
             [:a {:href (path-for :about)} "About"]]]]]))

(defn heroes-page []
  (fn []
    [:div.container
     [:h1 "Heroes"]
     [:ul.collection (map (fn [hero-id]
      [:a.collection-item {:href (path-for :hero {:hero-id hero-id})} "Hero Id: " hero-id])
      (range 1 6))]])) 
      
          
(defn hero-page [] 
  (fn []
    (let [routing-data (session/get :route)
          hero (get-in routing-data [:route-params :hero-id])
          hero-data {:hero-name "Songbird" 
                     :hero-race "Kenku" 
                     :hero-class "Rogue" 
                     :hero-bio "Angst. All the angst. And then some."}]   
      [:div.container
       [:div.card
        [:div.card-content
         [:span.card-title hero (:hero-name hero-data)]
         [:p (str (:hero-race hero-data) " " (:hero-class hero-data))]
         [:p.flow-text (:hero-bio hero-data)]]]])))

;; -------------------------
;; Translate routes -> page components


(defn page-for [route]
  (case route
    :index #'home-page
    :about #'about-page
    :items #'items-page
    :item #'item-page
    :hero #'hero-page
    :heroes #'heroes-page))


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
