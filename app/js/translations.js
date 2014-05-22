angular.module('gettext').run(['gettextCatalog', function (gettextCatalog) {
/* jshint -W100 */
    gettextCatalog.setStrings('fr_FR', {"AngularJS Demo":"Démo de AngularJS","Back to customers":"Retour aux clients","Customers:":"Clients","Enter info here":"Entrez une information içi","Orders for this customer":"Les commandes de ce client","Search:":"Rechercher:","There are no orders yet for that customer":"Il y n'existe aucune commande pour ce client","Today, let's take a look at angular-gettext translate module":"Aujourd'hui, jetons un oeil au module de traduction angular-gettext"});
/* jshint +W100 */
}]);