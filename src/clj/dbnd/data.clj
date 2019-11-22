(ns dbnd.data
  (:require [next.jdbc :as jdbc]))

(def db {:dbtype "mysql" 
         :dbname "DBnD"
         :user ""
         :password ""
         :host "ids"})

(def ds (jdbc/get-datasource db))
