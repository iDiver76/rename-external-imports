const gulp = require('gulp');
const replace = require('gulp-string-replace');

gulp.task('copyFiles', () => {
    return gulp.src('./src/**/*.js')
        .pipe(gulp.dest('./tmp/'));
});

gulp.task('replaceCdn', () => {
    return gulp.src(["./src/**/*.js"])
      .pipe(replace(/https:\/\/myfavoritecdn\/(.*)/g, (match, p1) => {
            // Replace foobaz with barbaz and log a ton of information
            // See http://mdn.io/string.replace#Specifying_a_function_as_a_parameter
            console.log('Found ' + p1 );
            return './tmp/' + p1;
            }))
      .pipe(gulp.dest('./tmp/'))
});