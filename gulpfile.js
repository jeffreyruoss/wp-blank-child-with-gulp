var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();

// Compile Sass into CSS, minify, and concatenate
function styles() {
    return gulp.src('./sass/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS())
        .pipe(concat('styles.min.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream());
}

// Transpile, minify, and concatenate JS
function scripts() {
    return gulp.src('./js/src/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(concat('script.min.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./js/dist'))
        .pipe(browserSync.stream());
}

// Static Server + watching scss/html files
function serve() {
    browserSync.init({
        proxy: "https://mysite.loc",
        injectChanges: true,
        https: true
    });

    gulp.watch('./sass/**/*.scss', styles);
    gulp.watch('./js/src/**/*.js', scripts);
    gulp.watch('./**/*.php').on('change', browserSync.reload);
}

exports.styles = styles;
exports.scripts = scripts;
exports.serve = serve;
exports.default = gulp.series(styles, scripts, serve);
