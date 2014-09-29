define([ 'directives/directives', 'directives/fusionChart/chartDefaultConfig',
    'underscore' ], function (directives, config, _) {
    'use strict';
    directives.directive('bar2d', function () {
        return {
            restrict: 'E',
            scope: {
                id: '@',
                chartConfig: '=',
                chartData: '='
            },
            link: function (scope) {
                var selfConfig = _.clone(config);
                var myConfig = _.extend(selfConfig, scope.chartConfig);

                var chart = {
                    'type': 'bar2d',
                    'renderAt': scope.id,
                    'width': '400',
                    'height': '300',
                    'dataFormat': 'json',
                    'dataSource': {
                        'chart': myConfig,
                        'data': scope.chartData || []
                    }
                };

                var myChart = new FusionCharts(chart);                

                scope.$watch('chartData', function (newValue) {
                    if (newValue) {
                    	myChart.setChartData({
                    		chart: myConfig, 
                    		data: newValue
                    	});
                    	myChart.render();
                    }
                }, true);
                
                scope.$on('$destroy', function() {
                	myChart.dispose();
                });

            }
        };
    });
});
