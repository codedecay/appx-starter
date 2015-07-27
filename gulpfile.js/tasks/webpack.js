'use strict';
var config = require('../config');
var gulp = require('gulp');
var webpack = require('webpack');
var gutil = require('gulp-util');

gulp.task('webpack', function(done) {
  var built = false;
  if (config.watch) {
    webpack(config.webpack).watch(200, function(err, stats) {
      if (err) {
        console.log(err);
      }
      if (!built) {
        built = true;
        gutil.log(gutil.colors.cyan('webpack'), 'task watching files...');
        done();
      }
    });
  } else {
    webpack(config.webpack, function(err, stats) {
      if (err) {
        console.log(err);
      }
      done();
    });
  }
});