define(['angular',
    'angular-route',
    'controllers/controllers',
    'directives/directives',
    'directives/fusionChart/bar2d',
    'directives/fusionChart/chart',
    'services/services',
    'controllers/login/loginController'
], function (angular) {
    'use strict';
    var app = angular.module('App', ['ngRoute', 'controllers', 'directives', 'services']);

    app.config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.when('/', {
                templateUrl: 'app/views/login/login.html',
                controller: 'LoginController'
            }).otherwise('/');
        }
    ]);

    return app;
});
