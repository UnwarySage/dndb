(ns dbnd.handler
  (:require
   [reitit.ring :as reitit-ring]
   [dbnd.middleware :refer [middleware]]
   [hiccup.page :refer [include-js include-css html5]]
   [config.core :refer [env]]
   [dbnd.data :as data]))


(defn standard-edn-response
  "Wraps something in an end wrapper"
  [body]
  {:status 200
   :headers {"Content-Type" "text/edn"}
   :body (str body)})


(def mount-target
  [:div#app
   [:h2 "Welcome to dbnd"]
   [:p "please wait while Figwheel is waking up ..."]
   [:p "(Check the js console for hints if nothing exciting happens.)"]])

(defn head []
  [:head
   [:meta {:charset "utf-8"}]
   [:meta {:name "viewport"
           :content "width=device-width, initial-scale=1"}]
   (include-css (if (env :dev) "/css/site.css" "/css/site.min.css"))])

(defn loading-page []
  (html5
   (head)
   [:body {:class "body-container"}
    mount-target
    (include-js "/js/app.js")]))

(defn index-handler
  [_request]
  {:status 200
   :headers {"Content-Type" "text/html"}
   :body (loading-page)})

(defn api-version-handler
  [_request]
  {:status 200
   :headers {"Content-Type" "text/edn"}
   :body (str {:api-version "0.0.1"})})

(defn api-hero-list 
  [_request]
  (standard-edn-response
    (data/get-hero-names)))    
  

(defn routes []
  [["/" {:get {:handler index-handler}}]
   ["/items"
    ["" {:get {:handler index-handler}}]
    ["/:item-id" {:get {:handler index-handler
                        :parameters {:path {:item-id int?}}}}]]
   ["/heroes"
    ["" {:get {:handler index-handler}}]
    ["/:hero-id" {:get {:handler index-handler
                        :parameters {:path {:item-id int?}}}}]]
   ["/about" {:get {:handler index-handler}}]
   ["/api"
    ["" {:get {:handler api-version-handler}}]
    ["/heroes"
     ["" {:get {:handler api-hero-list}}]]]])

(def app
  (reitit-ring/ring-handler
    (if (env :dev)
      (reitit-ring/router (routes))
      (constantly (reitit-ring/router (routes))))
   (reitit-ring/routes
    (reitit-ring/create-resource-handler {:path "/" :root "/public"})
    (reitit-ring/create-default-handler))
   {:middleware middleware}))
