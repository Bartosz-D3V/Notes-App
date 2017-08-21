// Karma configuration file, see link for more information
// https://karma-runner.github.io/0.13/config/configuration-file.html

module.exports = function (config) {
  const path = require('path');
  config.set({
    basePath: '',
    frameworks: ['jasmine', 'chai', '@angular/cli'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chai'),
      require('karma-chrome-launcher'),
      require('karma-coverage'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular/cli/plugins/karma')
    ],
    client: {
      clearContext: false,
    },
    files: [
      {pattern: './src/test.ts', watched: false},
      'node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css'
    ],
    preprocessors: {
      './src/test.ts': ['@angular/cli', 'coverage']
    },
    mime: {
      'text/x-typescript': ['ts', 'tsx']
    },
    coverageReporter: {
      reporters: [
        {type: 'text-summary'},
        {type: 'lcov'},
        'coverage-istanbul',
        'progress',
        'coverage'
      ]
    },
    coverageIstanbulReporter: {
      reports: ['html', 'lcovonly', 'text-summary'],
      dir: path.join('./', 'coverage'),
      fixWebpackSourcePaths: true,
      skipFilesWithNoCoverage: true,
      'report-config': {
        html: {
          subdir: 'html'
        }
      }
    },
    angularCli: {
      environment: 'dev'
    },
    reporters: config.angularCli && config.angularCli.codeCoverage
      ? ['progress', 'coverage-istanbul']
      : ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    customLaunchers: {
      Chrome_travis_ci: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },
    singleRun: true
  });
};
