(ns dbnd.handler
  (:require
   [reitit.ring :as reitit-ring]
   [dbnd.middleware :refer [middleware]]
   [hiccup.page :refer [include-js include-css html5]]
   [config.core :refer [env]]))

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

(defn version-handler
  [_request]
  {:status 200
   :headers {"Content-Type" "text/json"}
   :body "{\"api-version\": \"0.1.1\"}"})

(defn hero-handler
  [request]
  (let [hero-list ["{\"name\": \"Songbird\"}"
                   "{\"name\": \"Offa\"}"]
        hero-id (-> request :parameters :hero-id)
        _ (println request)
        selected-hero (nth hero-list hero-id)]
    (println request)
    {:status 200
     :headers {"Content-Type" "text/json"}
     :body selected-hero}))

(def app
  (reitit-ring/ring-handler
   (reitit-ring/router
    [["/" {:get {:handler index-handler}}]
     ["/items"
      ["" {:get {:handler index-handler}}]
      ["/:item-id" {:get {:handler index-handler
                          :parameters {:path {:item-id int?}}}}]]
     ["/about" {:get {:handler index-handler}}]
     ["/api"
      ["" {:get {:handler version-handler}}]
      ["/heroes" {:get {:handler hero-handler}}
       ["" {:get {:handler index-handler}}]
       ["/:hero-id" {:get {:handler hero-handler
                           :parameters {:path {:hero-id int?}}}}]]]])

   (reitit-ring/routes
    (reitit-ring/create-resource-handler {:path "/" :root "/public"})
    (reitit-ring/create-default-handler))
   {:middleware middleware}))
