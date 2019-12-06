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
;;-------------
;; Offers
(def get-quest-data (constantly {:quest-name "Dread Tiding"
                                 :quest-location "Port Azure"
                                 :quest-rewards "Sevula's Eternal Blade, 450XP"
                                 :quest-notes "Deliver news of the death of Umulthud to Sevula, and remind him of his promise"}))
(defn offer-mappings [inp]
  {:offer-id (:Offers/Offer_ID inp)
   :offer-quest-id (:Offers/Quest_ID inp)
   :offer-date (:Offers/Date inp)
   :offer-patron-id (:Offers/Patron_ID inp)})  

(defn get-offer-data [offer-id]
  (let [{:keys [offer-quest-id offer-patron-id] 
         :as offer-data}
        (offer-mappings
          (jdbc/execute-one!
            ds
            [(str "select * from Offers where Offer_ID = " offer-id)]))
        quest-data  (get-quest-data offer-quest-id)
        patron-data (get-patron-data offer-patron-id)]
    (merge quest-data patron-data offer-data)))

(defn get-offers []
 (into #{}
       (map #(get-offer-data (:Offers/Offer_ID %)))
     (jdbc/execute! ds ["select Offer_ID from Offers;"])))

(defn make-claim [offer-id hero-id]
  (jdbc/execute! ds [(str "insert Claims (Hero_ID, Offer_ID) values (" hero-id "," offer-id ");")]))
 

(defn claim-mappings [inp]
  {:claim-offer-id (:Claims/Offer_ID inp)
   :claim-hero-id (:Claims/Hero_ID inp)
   :claim-payment (:Claims/Payment inp)
   :claim-date (:Claims/Date inp)})

(defn get-claim-data [claim-offer-id]
  (let [claim-result (claim-mappings
                      (jdbc/execute-one!
                        ds
                        [(str "select * from Claims where Offer_ID = " claim-offer-id)]))
        hero-data (get-hero-data (:claim-hero-id claim-result))]
    (merge hero-data claim-result)))
        
(defn get-claims []
 (into #{}
       (map #(get-claim-data (:Claims/Offer_ID %)))
     (jdbc/execute! ds ["select Offer_ID from Claims"])))

     
