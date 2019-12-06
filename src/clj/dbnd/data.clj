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
(defn hero-mappings [res]
  {:hero-name (:Heroes/Hero_Name res)
   :hero-id (:Heroes/Hero_ID res)
   :hero-race (:Heroes/Race res)
   :hero-level (:Heroes/Total_Lvl res)
   :hero-class (:Heroes/Class res)
   :hero-bio (:Heroes/Bio res)
   :hero-available (:Heroes/Availible res)})

(defn get-hero-names []
  (into #{}
        (map hero-mappings)
        (jdbc/plan ds ["select * from Heroes"])))

(defn get-hero-data
  [hero-id]
  (let [command (str "select * from Heroes where Hero_ID = " hero-id ";")
        res (jdbc/execute-one! ds [command])]
    (hero-mappings res)))

(defn set-hero-availability [hero-id availability]
  (jdbc/execute-one! ds [(str "update Heroes set Available = " availability " where Hero_ID = " hero-id ";")]))

(defn get-hero-avail []
  (into #{}
    (map hero-mappings)
      (jdbc/plan
        ds
        ["select * from hero_avail"])))

(defn get-hero-navail []
  (into #{}
  (map hero-mappings)
    (jdbc/plan
      ds
      ["select * from hero_navail"])))
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
(defn quest-mappings [inp]
  {:quest-name (:Quests/Name inp)
   :quest-id (:Quests/Quest_ID inp)
   :quest-location (:Quests/Location inp)
   :quest-rewards (:Quests/Reward inp)
   :quest-notes (:Quests/Notes inp)})

(defn get-quest-data [quest-id]
  (quest-mappings
   (jdbc/execute-one! ds [(str "select * from Quests where Quest_ID = " quest-id ";")])))

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

(defn make-claim [offer-id hero-id payment]
  (jdbc/execute! ds [(str "insert Claims (Hero_ID, Offer_ID,Payment) values (" hero-id "," offer-id ",\"" payment "\");")]))

(defn claim-mappings [inp]
  {:claim-offer-id (:Claims/Offer_ID inp)
   :claim-hero-id (:Claims/Hero_ID inp)
   :claim-payment (:Claims/Payment inp)
   :claim-date (:Claims/Date inp)
   :claim-id (:Claims/Claim_ID inp)})

(defn get-claim-data [claim-id]
  (let [claim-result (claim-mappings
                      (jdbc/execute-one!
                       ds
                       [(str "select * from Claims where Claim_ID = " claim-id ";")]))
        hero-data (get-hero-data (:claim-hero-id claim-result))
        offer-data (get-offer-data (:claim-offer-id  claim-result))]
    (merge offer-data hero-data claim-result)))

(defn get-claims []
  (into #{}
        (map #(get-claim-data (:Claims/Claim_ID %)))
        (jdbc/execute! ds ["select Claim_ID from Claims"])))



