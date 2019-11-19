(ns dbnd.components.hero
  (:require 
    [reagent.core :as reagent :refer [atom]]
    [reagent.session :as session]
    [dbnd.core :refer [path-for]]))

(defn heroes-page []
  (fn []
    [:div.container
     [:a {:href (path-for :hero {:hero-id "Songbird"})} "Songbird"]])) 
     

       
          
(defn hero-page [] 
  (fn []
    (let [routing-data (session/get :route)
          hero (get-in routing-data [:route-params :hero-id])
          hero-data {:hero-name "Songbird" 
                     :hero-race "Kenku" 
                     :hero-class "Rogue" 
                     :hero-bio "Angst. All the angst. And then some."}]   
      [:container
       [:div.card
        [:div.card-content
         [:span.card-title (:hero-name hero-data)]
         [:p (str (:hero-race hero-data) " " (:hero-class hero-data))]
         [:p.flow-text (:hero-bio hero-data)]]]])))



