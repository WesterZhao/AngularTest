'use strict';
var sharedConfig = require('./karma-shared.conf');

module.exports = function(config) {
  var conf = sharedConfig();

  conf.files = conf.files.concat([
    //extra testing code
    //'test/vendor/angular-mocks.js',

    //test files
    //'./test/spec/**/*.js'
  ]);

  config.set(conf);
};
