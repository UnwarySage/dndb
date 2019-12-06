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
    ["/heroes"
     ["" :heroes]
     ["/:hero-id" :hero]]
    ["/patrons"
     ["" :patrons]
     ["/:patron-id" :patron]]
    ["/claims"
     ["" :claims]
     ["/:claim-id" :claim]]
    ["/offers"
     ["" :offers]
     ["/:offer-id" :offer]]
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

(defn make-claim [inp-event offer-id hero-id reward]
  (http/get (str api-path "offers/" offer-id "/claim")
            {:query-params {:reward reward
                            :hero-id hero-id}}))

(defn set-hero-availability [hero-id new-availibility]
  (http/get (str api-path "heroes/" hero-id "/set-avail")
            {:query-params {:availability new-availibility}}))
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
             [:a {:href (path-for :index)} "Home"]]
            [:li
             [:a {:href (path-for :heroes)} "Heroes"]]
            [:li
             [:a {:href (path-for :patrons)} "Patrons"]]
            [:li
             [:a {:href (path-for :offers)} "Offers"]]
            [:li
             [:a {:href (path-for :claims)} "Claims"]]
            [:li
             [:a {:href (path-for :about)} "About"]]]]]))

(defn heroes-page []
  (let [available-heroes-data (atom-from-api "heroes-available")
        unavailable-heroes-data (atom-from-api "heroes-not-available")]
    (fn []
      [:div.container
       [:h1 "Heroes"]
       [:div.row
        [:div.col.s6
         [:h4 "Available"]
         (if (not (empty? @available-heroes-data))
             [:ul.collection
               (map (fn [hero]
                      [:li.collection-item
                       [:a
                        {:key (:hero-id hero)
                         :href (path-for :hero {:hero-id (:hero-id hero)})}
                        (:hero-name hero)]])
                    @available-heroes-data)]
            [:h6 "No heroes available"])]
        [:div.col.s6
         [:h4 "Unavailable"]
         (if (not (empty? @unavailable-heroes-data))
             [:ul.collection 
                (map
                  (fn [hero]
                    [:li.collection-item
                     [:a
                      {:key (:hero-id hero)
                       :href (path-for :hero {:hero-id (:hero-id hero)})}
                      (:hero-name hero)]])
                  @unavailable-heroes-data)]
            [:h6 "All heroes available"])]]]))) 

(defn hero-page []
  (let [routing-data (session/get :route)
        hero (get-in routing-data [:route-params :hero-id])
        hero-data (atom-from-api (str "heroes/" hero))
        local-state (atom {})]
    (fn []
      [:div.container] 
      [:p.flow-text (str @hero-data)
       [:div.card
        [:div.card-content
         [:span.card-title 
          [:a {:href (path-for :heroes)} "<"]
          (:hero-name @hero-data)]
         [:p (str (:hero-race @hero-data) " " (:hero-class @hero-data))]
         [:p.flow-text (:hero-bio @hero-data)]
         (when (:hero-last-claim-id @hero-data)
           [:div
            [:h6 "Last claimed reward"]
            [:p.flow-text (:claim-payment @hero-data)]])]
        [:div.card-action
         [:button.btn-flat 
          {:on-click (fn [e]
                      (do 
                        (swap! local-state update :available not)
                        (set-hero-availability hero (:available @local-state))))}
          (if (nil? (:available @local-state))
              "Toggle Available"  
              (if (:available @local-state)
                  "Available"
                  "Unavailable"))]]]])))
          
                         
          
                               

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

(defn claims-page []
  (let [claims-data (atom-from-api "claims")]
    (fn []
      [:div.container
       [:h1 "Claims"]
       [:ul.collection
        (map (fn [claim]
               [:li.collection-item {:key (:claim-id claim)}
                [:a {:href (path-for :claim {:claim-id (:claim-id claim)})}
                 (str (:quest-name claim) " - " (:hero-name claim))]])
             @claims-data)]])))

(defn claim-page []
  (let [routing-data (session/get :route)
        claim (get-in routing-data [:route-params :claim-id])
        claim-data (atom-from-api (str "claims/" claim))]
    (fn []
      [:div.container
       [:div.card
        [:div.card-content
         [:span.card-title (:hero-name @claim-data)]
         [:p (str (:patron-location @claim-data))]
         [:p.flow-text (:claim-payment @claim-data)]]]])))

(defn offers-page []
  (let [offers-data (atom-from-api "offers")]
    (fn []
      [:div.container
       [:h1 "Offers"]
       [:ul.collection
        (map (fn [offer]
               [:li.collection-item {:key (:offer-id offer)}
                [:div.left-align
                 [:a {:href (path-for :offer {:offer-id (:offer-id offer)})}
                  (:quest-name offer)]
                 [:div (:quest-location offer)]]])
             @offers-data)]])))

(defn offer-page []
  (let [routing-data (session/get :route)
        offer (get-in routing-data [:route-params :offer-id])
        offer-data (atom-from-api (str "offers/" offer))
        hero-data (atom-from-api "heroes")
        local-state (atom {:making-claim false
                           :selected-hero nil
                           :reward nil})]
    (fn []
      [:div.container
       [:div.card
        [:div.card-content
         [:span.card-title (:quest-name @offer-data)]
         [:div.row
          [:div.col.s8
           [:h6 (:quest-location @offer-data)]
           [:p (:quest-notes @offer-data)]
           [:h6 "Rewards"]
           [:p (:quest-rewards @offer-data)]]
          [:div.col.s4
           [:h6 "Offered by"]
           [:h6
            [:a {:href (path-for :patron {:patron-id (:patron-id @offer-data)})}
             (:patron-name @offer-data)]]
           [:h6 (:patron-location @offer-data)]]]]
        (if (:making-claim @local-state)
          [:div.card-action
           (doall
            (map (fn [hero]
                   [:label {:key (:hero-id hero)}
                    [:button.btn {:on-click (fn [e]
                                              (.preventDefault e)
                                              (swap! local-state assoc :selected-hero (:hero-id hero)))}
                     [:span (:hero-name hero)]]])
                 @hero-data))
           [:label
            [:div]
            (get
             (reduce #(merge %1 {(:hero-id %2) (:hero-name %2)})
                     {}
                     @hero-data)
             (:selected-hero @local-state))]
           [:div.input-field
            [:input {:type :text
                     :placeholder (:quest-rewards @offer-data)
                     :on-change (fn [e] (swap! local-state assoc :reward (-> e .-target .-value)))}]]
           [:button.btn-flat.waves-effect {:on-click (fn [e]
                                                       (do
                                                         (make-claim e (:offer-id @offer-data)
                                                                     (:selected-hero @local-state)
                                                                     (:reward @local-state))
                                                         (reset! local-state {:making-claim false})))
                                           :class (when-not (and (:selected-hero @local-state)
                                                                 (:reward @local-state)
                                                                 (not= "" (:reward @local-state)))
                                                    "disabled")}

            "Claim"]]
          [:div.card-action
           [:a {:href "#"
                :on-click (fn [e] (swap! local-state assoc :making-claim true))}
            "Make a claim"]])]])))



; -------------------------
;; Translate routes -> page components


(defn page-for [route]
  (case route
    :index #'home-page
    :about #'about-page
    :hero #'hero-page
    :heroes #'heroes-page
    :patrons #'patrons-page
    :patron #'patron-page
    :claims #'claims-page
    :claim #'claim-page
    :offers #'offers-page
    :offer #'offer-page))


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
