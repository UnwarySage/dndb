# DBnD
Group is Charlot Shaw and Trent Merkins.
Project goal is a simplified forum for questgivers and player characters to exchange services for money.
This will consist of three pages, one which shows all heroes, one which will show all availible quests, and one that
allows quests to be posted/claimed.
We will be using `Clojure(Script)`, with the `Reagent` Framework and `Materialize.css` styling

## Database features
We will be using the following features at a minimum.

* Views, to sort out completed claims
* Triggers, to automate paying claims in full if the amount is left blank, this should also include a procedure.
* Functions, to take a hero and produce a terse bio. Eg "Sha-fu, Elf Monk."
* Indexes, as both heroes, patrons, and quests all have primary keys
* Normal Forms, normalized through the first three forms.

What we do not have is Dynamic Collumn. Likely these could be used to place tags on quests.

## Code Layout
On the server, we are using a standard `Jetty` webserver, with `ring` middleware and `reitit` routing.
Routes are defined `reitit` and `reitit` maps from incoming HTTP requests to Clojure functions. These functions return
either a `json` or `edn` payload.

On the browser side, we are using `reagent` as the virtual DOM manager. When new components are instanced, they
request their data from the server using `cljs-AJAX` and store it locally. There is little information on the client
stored globally, ideally the client should be almost stateless. Components are created using the standard
`reagent` `hiccup`-HTML syntax, and styled using `Materialize.css`.

## Progress
Admittedly, little progress shows on master. What has been accomplished behind the scenes is as follows.

### Charlot Shaw
* Setup template Project
* Install `Materialize.css`
* Experiments with `reitit` routing, on client and server.
* setup Github, with CI thorugh GH Actions.


### Trent Merkins
* Layout of standard page
* Navbar, with functioning links
* Initial database creation, including test data.
* Getting up to speed on `Clojure(Script)`
