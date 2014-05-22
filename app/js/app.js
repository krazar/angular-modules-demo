/**
 * Created by pierremarot on 19/02/2014.
 */
(function () {

    "use strict";

    var app = angular.module('customerApp', ['ngRoute', 'ngAnimate', 'gettext']);

    app.config(function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'views/customers.html',
            controller: 'CustomersController'
        }).when('/orders/:customerId', {
            templateUrl: 'views/orders.html',
            controller: 'OrdersController'
        });

    });

    app.run(function(gettextCatalog){
        gettextCatalog.debug = true;
        gettextCatalog.currentLanguage = 'fr_FR';
    });

    app.controller('OrdersController', function ($scope, $routeParams) {
        $scope.customerId = $routeParams.customerId;

    });
    app.controller('CustomersController', function ($scope, customersFactory) {
        $scope.customers = [];
        $scope.nbResult = 5;

        customersFactory.query().success(function (data) {
            $scope.customers = data;

        })
    });

    app.factory('customersFactory', function ($http) {
        var factory = {};

        factory.query = function () {
            return  $http.get('/customers.json')
        };
        return factory;
    });
})();