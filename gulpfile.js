var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var merge = require('merge-stream');
var runSequence = require('run-sequence');
var del = require('del');

gulp.task('test', function() {
    console.log("hello from test");

});

gulp.task('sass-compiler', function() {
    return gulp.src('app/scss/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
});

//gulp sass watch syntax
gulp.task('sass-watch', function(){
   gulp.watch('app/scss/style.scss', ['sass-compiler']);
});

//refreshes the browser, bind it to a watcher
gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: 'app'
        }
    })
});

//minify and nano css
gulp.task('useref', function(){
    var minifyJs = gulp.src('app/*.html')
        .pipe(useref())
        //minifies only if its js file
        .pipe(gulpIf('*.js', uglify()))
        .pipe(gulp.dest('dist'));

    var compileCss = gulp.src('app/css/style.css')
        .pipe(cssnano())
        .pipe(gulp.dest('dist/css'));

    return merge(minifyJs, compileCss);
});




gulp.task('nano', function () {
    return gulp.src('app/css/style.css')
        .pipe(cssnano())
        .pipe(gulp.dest('dist/css'));
});


gulp.task('multi', ['browserSync'], function(){
    gulp.watch('app/scss/style.scss', ['sass-compiler']);
    gulp.watch('app/*.html', browserSync.reload);
});

//run sequence with callback
gulp.task('build', function(callback) {
    runSequence('sass-compiler', 'useref', callback);
});

