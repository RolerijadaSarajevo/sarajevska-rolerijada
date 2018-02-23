var gulp = require("gulp");
var sass = require("gulp-sass");
var browserSync = require("browser-sync").create();
var autoprefixer = require("gulp-autoprefixer");
var cssnano = require("gulp-cssnano");
var urlAdjuster = require("gulp-css-url-adjuster");
var browserify = require("browserify");
var concat = require("gulp-concat");
var vendor = require("gulp-concat-vendor");
const criticalCss = require("gulp-critical-css");

gulp.task("sass", function() {
  return gulp
    .src("./src/scss/app.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(
      autoprefixer({
        browsers: ["last 2 versions"],
        cascade: false
      })
    )
    .pipe(
      urlAdjuster({
        prepend: "../img/"
      })
    )
    .pipe(cssnano())
    .pipe(criticalCss())
    .pipe(gulp.dest("./dest/css/"))
    .pipe(browserSync.stream());
});

gulp.task("js", function() {
  return gulp
    .src("src/js/main.js")
    .pipe(concat("main.js")) //and concat them into scrip.js
    .pipe(gulp.dest("./dest/js/"))
    .pipe(browserSync.stream());
});

gulp.task("vendor", function() {
  gulp
    .src("./src/js/vendor/*")
    .pipe(vendor("vendor.js"))
    .pipe(gulp.dest("./dest/js/vendor/"));
});

gulp.task("serve", ["sass", "js", "vendor"], function() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });

  gulp.watch("./src/scss/**/*.scss", ["sass"]);
  gulp.watch("./*.html").on("change", browserSync.reload);
  gulp.watch("./src/js/main.js", ["js"]);
});

gulp.task("default", ["js", "serve"]);
