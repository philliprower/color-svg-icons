/*
 * grunt-color-svg-icons
 * https://github.com/philliprower/color-svg-icons
 *
 * Copyright (c) 2015 Phillip Rower
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    color_svg_icons: {
      svg_options: {
        options: {
          colors: {
            normal: '#bcbcbc',
            hover: '#5f6062'
          }
        },
        files: {
          'tmp/svgs': ['test/svgs/*']
        }
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  //grunt.registerTask('test', ['clean', 'color_svg_icons', 'nodeunit']);
  grunt.registerTask('test', ['clean', 'color_svg_icons']);

  // By default, lint and run all tests.
  //grunt.registerTask('default', ['jshint', 'test']);
  grunt.registerTask('default', ['jshint', 'test']);

};
