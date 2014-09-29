require.config({
    paths: {
        'jquery': 'libs/jquery/jquery.min',
        'jquery-ui': 'libs/jquery-ui/ui/jquery-ui',
        'angular': 'libs/angular/angular.min',
        'angular-route': 'libs/angular-route/angular-route.min',
        'angular-bootstrap': 'libs/angular-bootstrap/ui-bootstrap.min',
        'angular-mocks': 'libs/angular-mocks/angular-mocks',
        'amchart': 'libs/amcharts/amcharts',
        'amchartSerial': 'libs/amcharts/serial',
        'underscore': 'libs/underscore/underscore-min',
        'app': 'app'
    },
    shim: {
        'jquery': {
            exports: 'jquery'
        },
        'jquery-ui': {
            deps: [ 'jquery' ],
            exports: 'jquery-ui'
        },
        'angular': {
            deps: [ 'jquery' ],
            exports: 'angular'
        },
        'angular-route': {
            deps: [ 'angular' ],
            exports: 'angular-route'
        },
        'amchart': {
            deps: [ 'jquery' ]
        },
        'amchartSerial': {
            deps: [ 'amchart' ]
        },
        'underscore': {
            exports: 'underscore'
        }
    }
});

require([ 'app', 'jquery', 'angular', 'underscore', 'amchart', 'jquery-ui', 'angular-route',
    'amchartSerial' ], function (app, jquery, angular) {
    'use strict';

    jquery(function () {
        angular.bootstrap(document, [ 'App' ]);
    });
});