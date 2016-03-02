var gulp = require('gulp');
var concat = require('gulp-concat');
var nano = require('gulp-cssnano');
var uglify = require('gulp-uglify');

gulp.task('scripts', function() {
  gulp.src('js/*.js')
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

gulp.task('styles', function() {
  gulp.src('css/*.css')
    .pipe(concat('styles.min.css'))
    .pipe(nano())
    .pipe(gulp.dest('dist'));
});

/* default tasks on run */
gulp.task('default', ['styles', 'scripts']);

/* watch tasks */
gulp.task('watch', ['styles', 'scripts'], function() {
  // Watch .css files
  gulp.watch('css/*.css', ['styles']);

  // Watch .js files
  gulp.watch('js/*.js', ['scripts']);
});
