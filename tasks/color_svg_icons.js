/*
 * grunt-color-svg-icons
 * https://github.com/philliprower/color-svg-icons
 *
 * Copyright (c) 2015 Phillip Rower
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

  var fs = require("fs"),
    path = require("path"),
    SVGO = require("svgo");

  var svgo = new SVGO();
  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  function transform (data, fill) {
    if (fill) {
      if (data.match(/fill="/)) {
        data = data.replace(/(fill=")[^"]+(")/g, "$1" + fill + "$2");
      }
      else {
        var attributes = " fill=\"" + fill + "\"";
        data = data.replace(/<path/g, "<path" + attributes);
        data = data.replace(/<circle/g, "<circle" + attributes);
        data = data.replace(/<rect/g, "<rect" + attributes);
        data = data.replace(/<ellipse/g, "<ellipse" + attributes);
      }
    }
    return data;
  }

  //function transform (data, fill) {
  //
  //  if (data !== data.match(/^<g>(?:.*?)<\/g>/)) {
  //    data = "<g>" + data + "</g>";
  //  }
  //  var attributes = "";
  //  if (fill) {
  //    if (data.match(/fill="/)) {
  //      data = data.replace(/(fill=")[^"]+(")/g, "$1" + fill + "$2");
  //    }
  //    else {
  //      attributes += " fill=\"" + fill + "\"";
  //    }
  //  }
  //  data = data.replace(/^<g/, "<g" + attributes);
  //  return data;
  //}

  grunt.registerMultiTask('color_svg_icons', 'Color svg icons.', function () {
    var colors = this.data.options.colors;
    if (!colors) {
      grunt.log.error('Must define colors to set svgs.');
    }
    // Iterate over all specified file groups.
    this.files.forEach(function (f) {
      // Concat specified files.
      var src = f.src.filter(function (filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function (filepath) {
        var rObj = {};
        rObj['filename']=filepath;
        // Read file source.
        rObj['file'] = grunt.file.read(filepath);
        return rObj;
      });


      src.forEach(function(data) {
        grunt.log.writeln('Source filename ' + data['filename']);
        grunt.verbose.writeln('Source filename contents ' + data['file']);
        //svgo.optimize(data['file'],function(result) {
        //  for (var c in colors) {
        //    var output = transform(result.data, colors[c]);
        //    grunt.verbose.writeln('Changed svg to color ' + colors[c] + ' svg contents : ' + output);
        //    var outpath = f.dest + path.sep +  c + '_' + path.basename(data['filename']);
        //    grunt.log.writeln('File "' + outpath + '" created.');
        //    grunt.file.write(outpath, output);
        //  }
        //});
        var result = data['file'];
          for (var c in colors) {
            var output = transform(result, colors[c]);
            grunt.verbose.writeln('Changed svg to color ' + colors[c] + ' svg contents : ' + output);
            var outpath = f.dest + path.sep +  c + '_' + path.basename(data['filename']);
            grunt.log.writeln('File "' + outpath + '" created.');
            grunt.file.write(outpath, output);
          }

      });


      // Print a success message.
      grunt.log.writeln('File "' + f.dest + '" created.');
    });
  });

};
