define([ 'controllers/controllers'
], function (controllers) {
    'use strict';
    controllers.controller('LoginController', [ '$scope', function ($scope) {

        $scope.Config5 = {
            'caption': 'Product-wise quarterly revenue in current year',
            'numberPrefix': '$',
            'paletteColors': '#1b75c2,#aa7711',
            'bgColor': '#ffffff',
            'borderAlpha': '20',
            'showCanvasBorder': '0',
            'usePlotGradientColor': '0',
            'plotBorderAlpha': '10',
            'legendBorderAlpha': '0',
            'legendShadow': '1',
            'valueFontColor': '#ff1111',
            'showXAxisLine': '0',
            'xAxisLineColor': '#999999',
            'divlineColor': '#ffffff',
            'divLineIsDashed': '1',
            'showAlternateVGridColor': '0',
            'subcaptionFontBold': '0',
            'subcaptionFontSize': '14',
            'showHoverEffect': '1',
            'showAboutMenuItem': '1',
            'aboutMenuItemLabel': 'lalalala',
            'showDivLineValues': '1',
            //'yAxisValuesStep': '3',
            'showShadow': '1',
            'showSum': '1',
            'yAxisMaxValue': 400000,
            'captionAlignment': 'left',
            'captionOnTop': '1',
            'showPlotBorder': '1',
            'plotBorderThickness': 5,
            'xAxisNameBorderColor': '#ffffff',
            'showBorder':'0'
        };


        $scope.bar2dConfig = {
            'caption': 'Chart1',
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

        $scope.stackedbar2dConfig = {
            'caption': 'Chart2',
            'subCaption': 'Harry\'s SuperMart',
            'xAxisname': 'Quarter',
            'yAxisName': 'Revenue (In USD)',
            'numberPrefix': '$',
            'paletteColors': '#0075c2,#1aaf5d,#f2c500',
            'bgColor': '#ffffff',
            'borderAlpha': '20',
            'showCanvasBorder': '0',
            'usePlotGradientColor': '0',
            'plotBorderAlpha': '10',
            'legendBorderAlpha': '0',
            'legendShadow': '0',
            'legendBgAlpha': '0',
            'valueFontColor': '#3FF333',
            'showXAxisLine': '1',
            'xAxisLineColor': '#999999',
            'divlineColor': '#999999',
            'divLineIsDashed': '1',
            'showAlternateHGridColor': '0',
            'subcaptionFontBold': '0',
            'subcaptionFontSize': '14',
            'showHoverEffect': '1'
        };


        $scope.stackedbar2dData = {
            'categories': [
                {
                    'category': [
                        {
                            'label': 'Q1'
                        },
                        {
                            'label': 'Q2'
                        },
                        {
                            'label': 'Q3'
                        },
                        {
                            'label': 'Q4'
                        }
                    ]
                }
            ],
            'dataset': [
                {
                    'seriesname': 'Food Products',
                    'data': [
                        {
                            'value': '110000'
                        },
                        {
                            'value': '150000'
                        },
                        {
                            'value': '135000'
                        },
                        {
                            'value': '150000'
                        }
                    ]
                },
                {
                    'seriesname': 'Non-Food Products',
                    'data': [
                        {
                            'value': '114000'
                        },
                        {
                            'value': '148000'
                        },
                        {
                            'value': '83000'
                        },
                        {
                            'value': '118000'
                        }
                    ]
                },
                {
                    'seriesname': 'Profit',
                    'renderAs': 'line',
                    'showValues': '0',
                    'data': [
                        {
                            'value': '24000'
                        },
                        {
                            'value': '45000'
                        },
                        {
                            'value': '23000'
                        },
                        {
                            'value': '38000'
                        }
                    ]
                }
            ]
        };

        $scope.bar2dConfig1 = {
            'caption': 'Chart3',
            'subCaption': 'Last month',
            'yAxisName': 'Sales (In USD)',
            'numberPrefix': '$',
            'paletteColors': '#0075c2,#55aac2,#3311c2',
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
            'toolTipPadding': '5'};


        $scope.bar2dData1 = {
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
        };

        $scope.changeData1 = function () {
            $scope.bar2dData1 = {
                'data': [
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
                ]
            };
        };


        $scope.Data5 = {
            'categories': [
                {
                    'category': [
                        {
                            'label': 'Q1'
                        },
                        {
                            'label': 'Q2'
                        },
                        {
                            'label': 'Q3'
                        },
                        {
                            'label': 'Q4'
                        }
                    ]
                }
            ],
            'dataset': [
                {
                    'seriesname': 'Food Products',
                    'data': [
                        {
                            'value': '121000'
                        },
                        {
                            'value': '135000'
                        },
                        {
                            'value': '123500'
                        },
                        {
                            'value': '145000'
                        }
                    ]
                },
                {
                    'seriesname': 'Non-Food Products',
                    'data': [
                        {
                            'value': '131400'
                        },
                        {
                            'value': '154800'
                        },
                        {
                            'value': '98300'
                        },
                        {
                            'value': '131800'
                        }
                    ]
                }
            ]
        };

        $scope.Config6 = {
            'caption': 'Sales of Liquor',
            'subCaption': 'Previous week vs current week',
            'xAxisName': 'Day',
            'yAxisName': 'Sales (In USD)',
            'numberPrefix': '$',
            'paletteColors': '#0075c2,#1aaf5d',
            'bgColor': '#ffffff',
            'showBorder': '0',
            'showCanvasBorder': '0',
            'plotBorderAlpha': '10',
            'usePlotGradientColor': '0',
            'legendBorderAlpha': '0',
            'legendShadow': '0',
            'plotFillAlpha': '60',
            'showXAxisLine': '1',
            'axisLineAlpha': '25',
            'showValues': '0',
            'captionFontSize': '14',
            'subcaptionFontSize': '14',
            'subcaptionFontBold': '0',
            'divlineColor': '#999999',
            'divLineIsDashed': '1',
            'divLineDashLen': '1',
            'divLineGapLen': '1',
            'showAlternateHGridColor': '0',
            'toolTipColor': '#ffffff',
            'toolTipBorderThickness': '0',
            'toolTipBgColor': '#000000',
            'toolTipBgAlpha': '80',
            'toolTipBorderRadius': '2',
            'toolTipPadding': '5'
        };

        $scope.Data6 = {
            'categories': [
                {
                    'category': [
                        {
                            'label': 'Mon'
                        },
                        {
                            'label': 'Tue'
                        },
                        {
                            'label': 'Wed'
                        },
                        {
                            'label': 'Thu'
                        },
                        {
                            'label': 'Fri'
                        },
                        {
                            'label': 'Sat'
                        },
                        {
                            'label': 'Sun'
                        }
                    ]
                }
            ],
            'dataset': [
                {
                    'seriesname': 'Previous Week',
                    'data': [
                        {
                            'value': '13000'
                        },
                        {
                            'value': '14500'
                        },
                        {
                            'value': '13500'
                        },
                        {
                            'value': '15000'
                        },
                        {
                            'value': '15500'
                        },
                        {
                            'value': '17650'
                        },
                        {
                            'value': '19500'
                        }
                    ]
                },
                {
                    'seriesname': 'Current Week',
                    'data': [
                        {
                            'value': '8400'
                        },
                        {
                            'value': '9800'
                        },
                        {
                            'value': '11800'
                        },
                        {
                            'value': '14400'
                        },
                        {
                            'value': '18800'
                        },
                        {
                            'value': '24800'
                        },
                        {
                            'value': '30800'
                        }
                    ]
                }
            ]
        };

        $scope.Config7 = {
            'caption': 'Files by Type',
            'captionAlignment': 'left',
            'captionFontSize': 28,
            'captionFontColor': '#757575',
            'captionFontBold': '0',
            'paletteColors': '#0075c2,#1aaf5d,#f2c500,#f45b00,#8e0000',
            'bgColor': '#ffffff',
            'valueFontSize': 10,
            'doughnutRadius': 80,
            'startingAngle': '90',
            'showPercentValues': '1',
            'showPercentInToolTip': '0',
            'formatNumberScale': '0'

        };

        $scope.chart7Data = {
            'data': [
                {
                    'label': 'Others',
                    'value': '500'
                },
                {
                    'label': 'Videos',
                    'value': '3300'
                },
                {
                    'label': 'Images',
                    'value': '3700'
                },
                {
                    'label': 'Audio',
                    'value': '1000'
                },
                {
                    'label': 'Presentations',
                    'value': '400'
                },
                {
                    'label': 'Documents',
                    'value': '1100'
                }
            ]
        };
    }]);
});
