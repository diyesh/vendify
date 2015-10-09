// Gulp
var gulp = require('gulp');

// Javascript
var order = require("gulp-order");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");



//---------Vendors----------//
// Vendors are sourced from bower_components
//

gulp.task('production', function() {
  gulp.src([
    // Components
    "src/bower_components/enquire/dist/enquire.min.js",
    "src/bower_components/savvior/dist/savvior.min.js",
    "src/bower_components/jquery-sticky/jquery.sticky.js",
    // Inline  
    "src/js/dist.js"
    ])
  .pipe(concat("brands.min.js"))
  .pipe(uglify())
  .pipe(gulp.dest('assets/'))
});
