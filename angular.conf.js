// Karma configuration
// Generated on Fri Dec 05 2014 15:21:28 GMT+0800 (CST)

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'app/app.coffee',
      'test/angular.coffee'
    ],
    exclude: [],
    //增加coffee的预处理器
    preprocessors: {
      'app/*.coffee': ['coffee'],
      'test/angular.coffee': ['coffee'],
      'app/*.coffee': ['coverage']
    },
    reporters: ['progress', 'coverage'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'], //'Firefox'
    singleRun: false
  });
};
