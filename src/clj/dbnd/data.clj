(ns dbnd.data
  (:require [next.jdbc :as jdbc]
            [clojure.edn :as edn]
            ))
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
