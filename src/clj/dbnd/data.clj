(ns dbnd.data
  (:require [next.jdbc :as jdbc]
            [clojure.edn :as edn]))
(def credentials (edn/read-string (slurp "credentials.edn")))

(def db
  (merge
   {:dbtype "mysql"
    :dbname "DBnD"
    :user "example"
    :password "abc123notapassword"
    :host "ids"
    :serverTimezone "America/Chicago"}
   credentials))

(def ds (jdbc/get-datasource db))



(defn get-hero-names []
  (into #{}
        (map
         (fn [res]
           {:hero-name (:Heroes/Hero_Name res)
            :hero-id (:Heroes/Hero_ID res)
            :hero-race (:Heroes/Race res)
            :hero-level (:Heroes/Total_Lvl res)
            :hero-class (:Heroes/Class res)
            :hero-bio (:Heroes/Bio res)}))
        (jdbc/plan ds ["select * from Heroes"])))

(defn get-hero-data 
  [hero-id]
  (let [command (str "select * from Heroes where Hero_ID = " hero-id ";")
        res (jdbc/execute-one! ds [command])]
    {:hero-name (:Heroes/Hero_Name res)
     :hero-id (:Heroes/Hero_ID res)
     :hero-race (:Heroes/Race res)
     :hero-level (:Heroes/Total_Lvl res)
     :hero-class (:Heroes/Class res)
     :hero-bio (:Heroes/Bio res)}))
;;----------------
;;Patrons
(defn patron-mappings [res]
  {:patron-location (:Patron/Location res)
   :patron-name (:Patron/Name res)
   :patron-id (:Patron/Patron_ID res)
   :patron-notes (:Patron/Notes res)})

(defn get-patrons []
  (into #{}
        (map patron-mappings) 
    (jdbc/plan ds ["select * from Patron"])))

(defn get-patron-data [patron-id]
  (patron-mappings 
    (jdbc/execute-one! 
      ds 
      [(str "select * from Patron where Patron_ID = " patron-id)])))
