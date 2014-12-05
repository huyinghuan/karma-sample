// Karma configuration
// Generated on Fri Dec 05 2014 15:21:28 GMT+0800 (CST)

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: ['test/*.js', 'test/*.coffee'],
    exclude: [],
    //增加coffee的预处理器
    preprocessors: {
      'test/*.coffee': ['coffee'],
      'test/*.js': ['coverage'],
      'test/*.coffee': ['coverage']
    },
    reporters: ['progress', 'coverage'],
    port: 9876,
    colors: true,
    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,
    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'], //'Firefox'
    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
