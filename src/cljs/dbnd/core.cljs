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
    ["/patrons"
      ["" :patrons]
      ["/:patron-id" :patron]]
    ["/quests"
     ["" :quests]
     ["/:quest-id":quest]]
    ["/offers"
     ["" :offers]
     ["/:offer-id" :offer]]
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
           [:ul#nav-mobile.left
            [:li
             [:a {:href (path-for :index)}"Home"]] 
            [:li
             [:a {:href (path-for :items)}"Items"]]
            [:li
             [:a {:href (path-for :heroes)} "Heroes"]]
            [:li
             [:a {:href (path-for :offers)} "Offers"]]
            [:li
             [:a {:href (path-for :patrons)} "Patrons"]]
            [:li
             [:a {:href (path-for :quests)} "Quests"]]
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
                     :hero-bio "Angst. All the angst.  then some."}]   
      [:div.container
       [:div.card
        [:div.card-content
         [:span.card-title (:hero-name hero-data)]
         [:p (str (:hero-race hero-data) " " (:hero-class hero-data))]
         [:p.flow-text (:hero-bio hero-data)]]]])))

(defn patrons-page []
  (fn []
    (let [patrons-list [{:patron-name "Umulthud" :patron-id 1}
                        {:patron-name "Prince Lisfael" :patron-id 2}]]
      [:div.container
       [:h1 "Patrons"]
       [:ul.collection 
        (map (fn [patron-map]
               [:a.collection-item 
                {:href (path-for :patron {:patron-id patron-map})} (:patron-name patron-map)])
             patrons-list)]])))
                          

(defn patron-page[]
  (fn []
    (let [routing-data (session/get :route)
          patron (get-in routing-data [:route-params :patron-id])
          patron-data {:patron-name "Umulthud"
                       :patron-location "Ramann"}]               
        [:div.container
         [:div.card
          [:div.card-content
           [:span.card-title (:patron-name patron-data)]
           [:p (str (:patron-name patron-data)" "(:patron-location patron-data))]
           [:p.flow-text (:patron-bio patron-data)]]]])))
  

(defn quests-page []
  (fn[]
    (let [quests-list [{:quest-name "Extermination" :quest-id 1}
                       {:quest-name "Missing Person" :quest-id 2}]]
      [:div.container
       [:h1 "Quests"]
       [:ul.collection
        (map (fn [quest-map]
               [:a.collection-item
                {:href (path-for :quest {:quest-id quest-map})} (:quest-name quest-map)]) quests-list)]]))) 


(defn quest-page []
  (fn []
    (let [routing-data (session/get :route)
          quest (get-in routing-data [:route-params :quest-id])
          quest-data {:quest-name "Extermination"
                      :quest-location "Ramann"
                      :quest-reward "200GP"
                      :quest-notes "This is for Giant rats in the forest."}]
      [:div.container
       [:div.card
        [:div.card-content]
        [:span.card-title (:quest-name quest-data)]
        [:p (str (:quest-name quest-data)" "(:quest-location quest-data)" "(:quest-reward quest-data))]
        [:p.flow-text (:quest-notes quest-data)]]])))

(defn offers-page [])

(defn offer-page [])
;; -------------------------
;; Translate routes -> page components

(defn page-for [route]
  (case route
    :index #'home-page
    :about #'about-page
    :items #'items-page
    :item #'item-page
    :hero #'hero-page
    :heroes #'heroes-page
    :offer #'offer-page
    :offers #'offers-page
    :patron #'patron-page
    :patrons #'patrons-page
    :quest #'quest-page
    :quests #'quests-page))

;; -------------------------
;; Page mounting nent

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
