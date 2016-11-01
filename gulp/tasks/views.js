import config 	   from '../config';
import gulp 	   from 'gulp';
import browserSync from 'browser-sync';

gulp.task('views', function() {
    return gulp.src(config.views.src)
    	.pipe(gulp.dest(config.views.dest))
    	.pipe(browserSync.stream());
});
