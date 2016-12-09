var gulp = require('gulp'),
watch  = require('gulp-watch'),
browserSync  = require('browser-sync').create();

gulp.task('watch', function() {
	browserSync.init({
		notify: false,
		server: {
			baseDir: 'docs'
		}
	});

	watch('./docs/index.html', function(){
		browserSync.reload();
	});

	watch('./docs/assets/css/**/*css' , function() {
		gulp.start('cssInject');
	})
});

gulp.task('cssInject', ['styles'], function() {
	return gulp.src('./docs/temp/styles')
	.pipe(browserSync.stream());
});
