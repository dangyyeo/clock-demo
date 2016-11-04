var gulp = require('gulp');
var stylus = require('gulp-stylus');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var connect = require('gulp-connect');
var minifycss = require('gulp-minify-css');

gulp.task('default', ['dy_watch','connect']);

gulp.task('dy_stylus', function () {
    return gulp.src('./style.styl')
        .pipe(sourcemaps.init())
        .pipe(stylus())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./css'))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest('./css'));
});

gulp.task('connect', function () {
        connect.server({
            root: './',
            livereload: true
         });
});

gulp.task('html', function() {
    gulp.src('./*.html')
        .pipe(connect.reload());
});

gulp.task("dy_watch", function () {
    gulp.watch('./style.styl', ['dy_stylus']);
    gulp.watch('./css/*.css', ['html']);
    gulp.watch('./js/*.js', ['html']);
    gulp.watch(['./*.html'], ['html']);
})