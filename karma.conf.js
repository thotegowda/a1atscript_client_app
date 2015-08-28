'use strict';
var path = require('path');

module.exports = function (config) {
  
    config.set({

        basePath: './',

        frameworks: ['mocha', 'sinon', 'sinon-chai'],

        files: [
            'node_modules/reflect-metadata/Reflect.js',
            'node_modules/jquery/dist/jquery.js',
            'node_modules/requirejs/require.js',
            'node_modules/angular/angular.js',       
            'node_modules/angular-mocks/angular-mocks.js',
            'node_modules/zone/lib/zone.js',

            'src/main.js',

		    'spec/*.spec.js'
        ],

        preprocessors: {
            'src/*.js': ['babel', 'sourcemap'],
            'spec/*.spec.js': ['babel', 'sourcemap'],
        },
        
        babelPreprocessor: {
          options: {
            sourceMap: 'inline',
            optional: ['es7.decorators']
          }
          

        },

        webpack: {
          devtool: 'inline-source-map'
        },
        
        plugins: [
         'karma-babel-preprocessor',
         'karma-mocha',
         'karma-chai',
         'karma-phantomjs-launcher',
         'karma-chrome-launcher',
         'karma-sourcemap-loader',
         'karma-webpack',
         'karma-sourcemap-loader',
         'karma-sinon-chai',
         'karma-sinon'
        ],

        client: {
            mocha: {
                reporter: ['spec'],
                ui: 'bdd',
                timeout: '10000'
            },
            captureConsole: true
        },

        mochaReporter: {
          output: 'full'
        },

        port: 9876,
        colors: true,
        autoWatch: true,
        singleRun: false,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_DEBUG,

        browsers: ['PhantomJS']

    });
};
