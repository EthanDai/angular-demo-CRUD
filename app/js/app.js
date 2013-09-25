'use strict';

// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers', 'LocalStorageModule']).
config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/list', {
                templateUrl: 'partials/list.html',
                controller: 'ListCtrl'
            })
            .when('/add', {
                templateUrl: 'partials/edit.html',
                controller: 'EditCtrl'
            })
            .when('/edit/:id', {
                templateUrl: 'partials/edit.html',
                controller: 'EditCtrl'
            })
            .otherwise({
                redirectTo: '/list'
            });
    }
]);