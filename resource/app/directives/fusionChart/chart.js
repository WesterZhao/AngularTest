define([ 'directives/directives', 'directives/fusionChart/chartDefaultConfig',
    'underscore' ], function (directives, config, _) {
    'use strict';
    directives.directive('dmcChart', function () {
        return {
            restrict: 'E',
            scope: {
                id: '@',
                chartType: '@',
                chartConfig: '=',
                chartData: '='
            },
            link: function (scope) {
                var myChart;

                var selfConfig = _.clone(config);

                var myConfig = _.extend(selfConfig, scope.chartConfig);

                var chart = {
                    'type': scope.chartType,
                    'renderAt': scope.id,
                    'width': '500',
                    'height': '400',
                    'dataFormat': 'json',
                    'dataSource': {
                        'chart': myConfig
                    }
                };

                scope.$watch('chartData', function (newValue) {
                    if (newValue) {
                        console.log(dataType(scope.chartType));
                        _.extend(chart.dataSource, scope.chartData);
                        myChart = new FusionCharts(chart);
                        myChart.render();
                    }
                }, true);

                scope.$on('$destroy', function () {
                    myChart.dispose();
                });

                function dataType(type) {

                    var charType = {
                        'SSCharts': [
                            'column3d',
                            'column2d',
                            'line',
                            'area2d',
                            'bar2d',
                            'pie2d',
                            'pie3d',
                            'doughnut2d',
                            'doughnut3d',
                            'pareto2d',
                            'pareto3d'
                        ],
                        'MSCharts': [
                            'mscolumn2d',
                            'mscolumn3d',
                            'msline',
                            'msbar2d',
                            'msbar3d',
                            'msarea',
                            'marimekko',
                            'zoomline'
                        ],
                        'StCharts': [
                            'stackedcolumn3d',
                            'stackedcolumn2d',
                            'stackedbar2d',
                            'stackedbar3d',
                            'stackedarea2d',
                            'msstackedcolumn2d'
                        ],
                        'ComCharts': [
                            'mscombi3d',
                            'mscombi2d',
                            'mscolumnline3d',
                            'stackedcolumn2dline',
                            'stackedcolumn3dline',
                            'mscombidy2d',
                            'mscolumn3dlinedy',
                            'stackedcolumn3dlinedy',
                            'msstackedcolumn2dlinedy'
                        ],
                        'XYPlCharts': [
                            'scatter',
                            'bubble'
                        ],
                        'ScrCharts': [
                            'scrollcolumn2d',
                            'scrollarea2d',
                            'scrolline2d',
                            'scrollstackedcolumn2d',
                            'scrollcombi2d',
                            'scrollcombidy2d'
                        ],
                        'Others': [
                            'ssgrid'
                        ]
                    };

                    var charTypeName;

                    _.each(charType, function (value, key) {
                        if (value.indexOf(type.toLowerCase()) > -1) {
                            charTypeName = key;
                        }
                    });

                    return charTypeName;
                }

            }
        };
    });
});
