const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();
const runSequence = require('run-sequence');
const del = require('del');
const babel = require('gulp-babel');
const stylus = require('gulp-stylus');
// const sass = require('gulp-sass');
const purify = require('gulp-purifycss');
const plumber = require('gulp-plumber');
const htmlhint = require('gulp-htmlhint');
const fileinclude = require('gulp-file-include');
const uglify = require('gulp-uglify');

//image compression
gulp.task('imgMin', () =>
    gulp.src('dev/links/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/links/img/'))
)


// browsersync
gulp.task('browserSync', function () {
  browserSync.init({
    server: {
      baseDir: './build',
      https: true
    },
  })
})

// Css compiling
gulp.task('csscompile', function () {
  gulp.src('dev/css/*.styl')
    .pipe(plumber())  
    // .pipe(sourcemaps.init())
    .pipe(stylus())
    .pipe(autoprefixer())
    .pipe(purify(['./build/*.html', './build/js/*.js'], { rejected: true, minify: true}))
    // .pipe(sourcemaps.write('./maps'))
    .pipe(plumber.stop())
    .pipe(gulp.dest('./build/css/'))
    .pipe(browserSync.reload({ stream: true }))
})

// js compiling
gulp.task('jscompile', function () {
  gulp.src('dev/js/*.js')
    .pipe(plumber())  
    // .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(uglify({
      output: {
        comments: 'all'
      }
    }))
    // .pipe(sourcemaps.write('./maps'))
    .pipe(plumber.stop())
    .pipe(gulp.dest('./build/js/'))
})

// // htlm compiling 
gulp.task('htmlcompile', function () {
  gulp.src('dev/*.html')
    .pipe(plumber())
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(htmlhint())
    .pipe(htmlhint.reporter())
    .pipe(plumber.stop())
    .pipe(gulp.dest('./build'))
    // browserSync.reload
})

// gulp.task('task-name', function() {
//   // Stuff here
// });

gulp.task('watch', ['browserSync'], function () {
  gulp.watch('dev/css/*.styl', ['csscompile']);
  gulp.watch('dev/css/parts/*.styl', ['csscompile']);
  gulp.watch('dev/*.html', ['htmlcompile', browserSync.reload]);
  gulp.watch('dev/js/*.js', ['jscompile', browserSync.reload]);
})

gulp.task('build', ['csscompile', 'imgMin', 'jscompile', 'htmlcompile'], function () {
  console.log('processing final build');
})