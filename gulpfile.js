var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function() {
    return gulp.src(['scss/**/*.scss', 'node_modules/bootstrap/scss/bootstrap.scss'])
    .pipe(sass())
    .pipe(gulp.dest('./css/'))
});

//Watch task
gulp.task('default',function() {
    gulp.watch('scss/main.scss', gulp.series('styles'));
});