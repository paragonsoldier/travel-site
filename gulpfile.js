var gulp = require('gulp'),
watch = require('gulp-watch');

gulp.task('default', function() {
  console.log("Hello Gulp!")
});

gulp.task('html', function() {
  console.log("Hello HTML Gulp");
});

gulp.task('css', function() {
  console.log("Hello CSS Gulp");
});

gulp.task('watch', function() {

  watch('./app/index.html', function() {
    gulp.start('html');
  });

  watch('./app/assets/styles/**/*.css', function() {
    gulp.start('css');
  });
});
