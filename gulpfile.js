'use strict'

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function(){
  gulp.src('./css/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./css'));
  return gulp.src('package.json')
});

gulp.task('sass:watch', function(){
  gulp.watch('./css/*.scss', ['sass'])
  return gulp.src('.sass/**/*.scss')
});

gulp.task('browser-sync', function(){
  var files = ['./*.html', './css/*.css', './img/*.{png, jpg, jpeg, gif', './js/*.js'];
  browserSync.init({
      server: {
          baseDir: './'
      }
  });
});

gulp.task('default', ['browser-sync'], function(){
  gulp.start('sass:watch');
  });