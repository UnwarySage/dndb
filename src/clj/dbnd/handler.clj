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

(defn api-hero-handler
  [{:keys [path-params] :as request}]
  (println path-params)
  (standard-edn-response
   (data/get-hero-data (:hero-id path-params))))

(defn api-patron-list [_request]
  (standard-edn-response
   (data/get-patrons)))

(defn api-patron-handler
  [{:keys [path-params] :as request}]
  (standard-edn-response
   (data/get-patron-data (:patron-id path-params))))

(defn api-claim-list [_request]
  (standard-edn-response
   (data/get-claims)))

(defn api-claim-handler
  [{:keys [path-params] :as request}]
  (standard-edn-response
   (data/get-claim-data (:claim-id path-params))))

(defn api-offer-list [_request]
  (standard-edn-response
   (data/get-offers)))

(defn api-offer-handler
  [{:keys [path-params] :as request}]
  (standard-edn-response
   (data/get-offer-data (:offer-id path-params))))

(defn api-make-claim-handler
  [{:keys [path-params query-params] :as request}]
  (data/make-claim (:offer-id path-params) (get query-params "hero-id") (get query-params "reward")))

(defn api-heroes-available-list [_request]
  (standard-edn-response 
    (data/get-hero-avail)))

(defn api-heroes-unavailable-list [_request]
  (standard-edn-response
    (data/get-hero-navail)))

(defn api-set-hero-availability 
  [{:keys [path-params query-params] :as request}]
  (data/set-hero-availability (:hero-id path-params) (get query-params "availability"))) 
  
 
(defn routes []
  [["/" {:get {:handler index-handler}}]
   ["/heroes"
    ["" {:get {:handler index-handler}}]
    ["/:hero-id" {:get {:handler index-handler
                        :parameters {:path {:item-id int?}}}}]]
   ["/patrons"
    ["" {:get {:handler index-handler}}]
    ["/:patron-id" {:get {:handler index-handler
                          :parameters {:path {:item-id int?}}}}]]
   ["/about" {:get {:handler index-handler}}]
   ["/api"
    ["/version" {:get {:handler api-version-handler}}]
    ["/heroes"
     ["" {:get {:handler api-hero-list}}]
     ["-available" {:get {:handler api-heroes-available-list}}]
     ["-not-available" {:get {:handler api-heroes-unavailable-list}}]
     ["/:hero-id" {:get {:handler api-hero-handler
                         :parameters {:path {:item-id int?}}}}]
     ["/:hero-id/set-avail" {:get {:handler api-set-hero-availability
                                   :parameters {:path {:hero-id int?}
                                                :query {:availability boolean?}}}}]]
      
    ["/patrons"
     ["" {:get {:handler api-patron-list}}]
     ["/:patron-id" {:get {:handler api-patron-handler
                           :parameters {:path {:patron-id int?}}}}]]
    ["/claims"
     ["" {:get {:handler api-claim-list}}]
     ["/:claim-id" {:get {:handler api-claim-handler
                          :parameters {:path {:claim-id int?}}}}]]
    ["/offers"
     ["" {:get {:handler api-offer-list}}]
     ["/:offer-id"
      ["" {:get {:handler api-offer-handler}
           :parameters {:path {:offer-id int?}}}]
      ["/claim" {:get {:handler api-make-claim-handler
                       :parameters {:path {:hero-id int?}
                                    :query {:reward string?
                                            :hero-id int?}}}}]]]]])
(def app
  (reitit-ring/ring-handler
   (if (env :dev)
     (reitit-ring/router (routes))
     (constantly (reitit-ring/router (routes))))
   (reitit-ring/routes
    (reitit-ring/create-resource-handler {:path "/" :root "/public"})
    (reitit-ring/create-default-handler))
   {:middleware middleware}))
