import gulp from 'gulp';
import concat from 'gulp-concat';

// export default () => (
//     gulp.src('src/files/*')
//     .pipe(imagemin())
//     .pipe(gulp.dest('dest/files'))
// )

// const gulp = require('gulp');
// const concat = require('gulp-concat');


// Gulp task to concatenate files
gulp.task('default', function() {
    return gulp.src('src/files/*')
        .pipe(concat('all.js')) 
        .pipe(gulp.dest('dest/files'));
});


