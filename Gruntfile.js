module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-open');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-karma');

    grunt.initConfig({
        shell: {
            options : {
                stdout: true
            },
            npm_install: {
                command: 'npm install'
            },
            bower_install: {
                command: './node_modules/.bin/bower install'
            },
            font_awesome_fonts: {
                command: 'cp -R bower_components/components-font-awesome/font app/font'
            }
        },

        connect: {
            options: {
                base: 'resource/'
            },
            webserver: {
                options: {
                    port: 8888,
                    keepalive: true
                }
            },
            devserver: {
                options: {
                    port: 8080
                }
            },
            testserver: {
                options: {
                    port: 9999
                }
            },
            coverage: {
                options: {
                    base: 'coverage/',
                    port: 5555,
                    keepalive: true
                }
            }
        },

        open: {
            devserver: {
                path: 'http://localhost:8080/index.html'
            },
            coverage: {
                path: 'http://localhost:5555'
            }
        },

        karma: {
            unit: {
                configFile: './test/karma-unit.conf.js',
                autoWatch: false,
                singleRun: true
            },
            unit_auto: {
                configFile: './test/karma-unit.conf.js'
            },
            midway: {
                configFile: './test/karma-midway.conf.js',
                autoWatch: false,
                singleRun: true
            },
            midway_auto: {
                configFile: './test/karma-midway.conf.js'
            },
            e2e: {
                configFile: './test/karma-e2e.conf.js',
                autoWatch: false,
                singleRun: true
            },
            e2e_auto: {
                configFile: './test/karma-e2e.conf.js'
            }
        },

        watch: {
            assets: {
                files: ['resource/app/asset/css/**/*.css','resource/app/**/*.js'],
                tasks: ['concat']
            }
        },

        concat: {
            styles: {
                dest: './resource/app/asset/css/app.css',
                src: [
                    '/resource/app/asset/css/reset.css',
                    'bower_components/components-font-awesome/css/font-awesome.css',
                    'bower_components/bootstrap.css/css/bootstrap.css',
                    '/resource/app/asset/css/app.css'
                ]
            },
            scripts: {
                options: {
                    separator: ';'
                },
                dest: './resource/app/asset/css/app.js',
                src: [
                    'bower_components/angular/angular.js',
                    'bower_components/angular-route/angular-route.js',
                    'bower_components/angularjs-scope.safeapply/src/Scope.SafeApply.js',

                    'resource/app/services/**/*.js',
                    'resource/app/directives/**/*.js',
                    'resource/app/controllers/**/*.js',
                    'resource/app/filters/**/*.js',
                    'resource/app/app.js'
                ]
            }
        }
    });

    grunt.registerTask('test', ['connect:testserver','karma:unit','karma:midway', 'karma:e2e']);
    grunt.registerTask('test:unit', ['karma:unit']);
    grunt.registerTask('test:midway', ['connect:testserver','karma:midway']);
    grunt.registerTask('test:e2e', ['connect:testserver', 'karma:e2e']);

    //keeping these around for legacy use
    grunt.registerTask('autotest', ['autotest:unit']);
    grunt.registerTask('autotest:unit', ['connect:testserver','karma:unit_auto']);
    grunt.registerTask('autotest:midway', ['connect:testserver','karma:midway_auto']);
    grunt.registerTask('autotest:e2e', ['connect:testserver','karma:e2e_auto']);

    //installation-related
    grunt.registerTask('install', ['shell:npm_install','shell:bower_install','shell:font_awesome_fonts']);

    //defaults
    grunt.registerTask('default', ['dev']);

    //development
    grunt.registerTask('dev', ['install', 'concat', 'connect:devserver', 'open:devserver', 'watch:assets']);

    //server daemon
    grunt.registerTask('serve', ['connect:webserver']);
};

