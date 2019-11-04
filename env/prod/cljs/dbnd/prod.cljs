(ns dbnd.prod
  (:require [dbnd.core :as core]))

;;ignore println statements in prod
(set! *print-fn* (fn [& _]))

(core/init!)
