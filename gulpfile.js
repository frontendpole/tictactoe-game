'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');

gulp.task('sass', function () {
    return gulp.src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist'));
});

gulp.task('html-copy', () => {
    return gulp.src('./src/index.html').pipe(gulp.dest('./dist'));
});

gulp.task('babel', () => {});

gulp.task('sass:watch', function () {
    gulp.watch('./sass/**/*.scss', gulp.parallel('sass'));
});
// Uzupełnić task do builda, który wykonuje taski sass, babel, copy-html
glup.task('build', () => {});
