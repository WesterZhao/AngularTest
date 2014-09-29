'use strict';
module.exports = function() {
  return {
    basePath: '../',
    frameworks: ['jasmine'],
    reporters: ['progress'],
    browsers: ['Chrome'],
    autoWatch: true,

    // these are default values anyway
    singleRun: false,
    colors: true,
    
    files : [
      //3rd Party Code
      //'resource/app/libs/require.js',

      //App-specific Code
      'resource/app/services/**/*.js',
      'resource/app/directives/**/*.js',
      'resource/app/controllers/**/*.js',
      'resource/app/app.js'

      //Test-Specific Code
    ]
  };
};
