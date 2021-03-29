const postcss = require('gulp-postcss')
const gulp = require('gulp')
const browserSync = require('browser-sync').create();

gulp.task('browser-sync', gulp.series((done) => {
	browserSync.init({
		server: {
			baseDir: '_site',
		},
        notify: false,
	});
    return done()
}));

gulp.task('css', () => {
    return gulp.src('./src/styles/*.css')
        .pipe(postcss())
        .pipe(gulp.dest('./_site/assets'))
})

/*
 * Rebuild HTML content & reload browserSync
 */
gulp.task('reload', gulp.series((done) => {
	browserSync.reload();
    return done()
}));

gulp.task('watch', function() {
    gulp.watch(['src/styles/*.css', 'tailwind.config.js'], gulp.series('css', 'reload'));
    gulp.watch(['_site'], gulp.series('reload'));
});

gulp.task('default', gulp.series('css', 'browser-sync', 'watch'))

