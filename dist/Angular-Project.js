define(['angular',
    'angular-route',
    'controllers/controllers',
    'directives/directives',
    'directives/fusionChart/bar2d',
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
;define(['angular'], function(angular) {
    'use strict';
    return angular.module('controllers', []);
});
;define([ 'controllers/controllers'
], function (controllers) {
    'use strict';
    controllers.controller('LoginController', [ '$scope', function ($scope) {        

        var myChart = new FusionCharts({
            'type': 'bar2d',
            'renderAt': 'FusionCharts-chart-container',
            'width': '400',
            'height': '300',
            'dataFormat': 'json',
            'dataSource': {
                'chart': {
                    'caption': 'Top 5 Stores by Sales',
                    'subCaption': 'Last month',
                    'yAxisName': 'Sales (In USD)',
                    'numberPrefix': '$',
                    'paletteColors': '#0075c2',
                    'bgColor': '#ffffff',
                    'showBorder': '0',
                    'showCanvasBorder': '0',
                    'usePlotGradientColor': '0',
                    'plotBorderAlpha': '10',
                    'placeValuesInside': '1',
                    'valueFontColor': '#ffffff',
                    'showAxisLines': '1',
                    'axisLineAlpha': '25',
                    'divLineAlpha': '10',
                    'alignCaptionWithCanvas': '0',
                    'showAlternateVGridColor': '0',
                    'captionFontSize': '14',
                    'subcaptionFontSize': '14',
                    'subcaptionFontBold': '0',
                    'toolTipColor': '#ffffff',
                    'toolTipBorderThickness': '0',
                    'toolTipBgColor': '#000000',
                    'toolTipBgAlpha': '80',
                    'toolTipBorderRadius': '2',
                    'toolTipPadding': '5'
                },
                'data': [
                    {
                        'label': 'Bakersfield Central',
                        'value': '880000'
                    },
                    {
                        'label': 'Garden Groove harbour',
                        'value': '730000'
                    },
                    {
                        'label': 'Los Angeles Topanga',
                        'value': '590000'
                    },
                    {
                        'label': 'Compton-Rancho Dom',
                        'value': '520000'
                    },
                    {
                        'label': 'Daly City Serramonte',
                        'value': '330000'
                    }
                ]
            }
        });

        myChart.render();


        var chart;

        var chartData = [
            {
                'country': 'USA',
                'visits': 4025
            },
            {
                'country': 'China',
                'visits': 1882
            },
            {
                'country': 'Japan',
                'visits': 1809
            },
            {
                'country': 'Germany',
                'visits': 1322
            },
            {
                'country': 'UK',
                'visits': 1122
            },
            {
                'country': 'France',
                'visits': 1114
            },
            {
                'country': 'India',
                'visits': 984
            },
            {
                'country': 'Spain',
                'visits': 711
            },
            {
                'country': 'Netherlands',
                'visits': 665
            },
            {
                'country': 'Russia',
                'visits': 580
            },
            {
                'country': 'South Korea',
                'visits': 443
            },
            {
                'country': 'Canada',
                'visits': 441
            },
            {
                'country': 'Brazil',
                'visits': 395
            },
            {
                'country': 'Italy',
                'visits': 386
            },
            {
                'country': 'Australia',
                'visits': 384
            },
            {
                'country': 'Taiwan',
                'visits': 338
            },
            {
                'country': 'Poland',
                'visits': 328
            }
        ];

        chart = new AmCharts.AmSerialChart();
        chart.dataProvider = chartData;
        chart.categoryField = 'country';
        chart.startDuration = 1;

        // AXES
        // category
        var categoryAxis = chart.categoryAxis;
        categoryAxis.labelRotation = 90;
        categoryAxis.gridPosition = 'start';

        // value
        // in case you don't want to change default settings of value axis,
        // you don't need to create it, as one value axis is created automatically.

        // GRAPH
        var graph = new AmCharts.AmGraph();
        graph.valueField = 'visits';
        graph.balloonText = '[[category]]: <b>[[value]]</b>';
        graph.type = 'column';
        graph.lineAlpha = 0;
        graph.fillAlphas = 0.8;
        chart.addGraph(graph);

        // CURSOR
        var chartCursor = new AmCharts.ChartCursor();
        chartCursor.cursorAlpha = 0;
        chartCursor.zoomable = false;
        chartCursor.categoryBalloonEnabled = false;
        chart.addChartCursor(chartCursor);

        chart.write('chart-container');


        $scope.bar2dConfig = {
            'caption': 'Top 5 Stores by Sales',
            'subCaption': 'Last month',
            'yAxisName': 'Sales (In USD)',
            'numberPrefix': '$',
            'paletteColors': '#0075c2',
            'bgColor': '#ffffff',
            'showBorder': '0',
            'showCanvasBorder': '0',
            'usePlotGradientColor': '0',
            'plotBorderAlpha': '10',
            'placeValuesInside': '1',
            'valueFontColor': '#ffffff',
            'showAxisLines': '1',
            'axisLineAlpha': '25',
            'divLineAlpha': '10',
            'alignCaptionWithCanvas': '0',
            'showAlternateVGridColor': '0',
            'captionFontSize': '14',
            'subcaptionFontSize': '14',
            'subcaptionFontBold': '0',
            'toolTipColor': '#ffffff',
            'toolTipBorderThickness': '0',
            'toolTipBgColor': '#000000',
            'toolTipBgAlpha': '80',
            'toolTipBorderRadius': '2',
            'toolTipPadding': '5'
        };

        $scope.bar2dData = [
            {
                'label': 'Bakersfield Central',
                'value': '880000'
            },
            {
                'label': 'Garden Groove harbour',
                'value': '730000'
            },
            {
                'label': 'Los Angeles Topanga',
                'value': '590000'
            },
            {
                'label': 'Compton-Rancho Dom',
                'value': '520000'
            },
            {
                'label': 'Daly City Serramonte',
                'value': '330000'
            }
        ];

        $scope.changeData = function () {
            $scope.bar2dData = [
                {
                    'label': 'aaaaaaaaaaaaa',
                    'value': '8800'
                },
                {
                    'label': 'bbbbbbbbbbbb',
                    'value': '7300'
                },
                {
                    'label': 'cccccccccc',
                    'value': '5900'
                },
                {
                    'label': 'ddddddddddd',
                    'value': '5200'
                },
                {
                    'label': 'eeeeeeeeee',
                    'value': '3300'
                }
            ];
        };


    }]);
});
;define(['angular'], function(angular) {
    'use strict';
    return angular.module('directives', []);
});
;require.config({
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
});;define(['angular'], function(angular) {
    'use strict';
    return angular.module("services", []);
});
