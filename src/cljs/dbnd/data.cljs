(ns dbnd.data
  (:require
   [ajax.core :as aj]
   [cljs.core.async :as as])
  (:require-macros
   [cljs.core.async.macros :refer [go]]))

(defn handler [response]
  (.log js/console (str response)))

(defn error-handler [{:keys [status status-text]}]
  (.log js/console (str "something bad happened: " status " " status-text)))

(def base-url "http://localhost:3449")

(def api-url (str base-url "/api"))

(def store (atom {}))

(defn get-hero
  "fetches a given hero to the store"
  [hero-id]
  (let [prom (promise)
        handler-fn #(deliver prom %)]
    (aj/GET (str api-url "/heroes")
      {:handler handler-fn})))

