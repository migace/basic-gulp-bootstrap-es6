import gulp 		from 'gulp';
import babel 		from 'gulp-babel';
import config		from '../config';
import browserSync 	from 'browser-sync';
import concat 		from 'gulp-concat';
import uglify 		from 'gulp-uglify';

gulp.task('js', function() {
	return gulp.src(config.scripts.src)
		.pipe(babel({
            presets: ['es2015']
        }))
        .pipe(concat(config.scripts.filename))
        .pipe(uglify())
        .pipe(gulp.dest(config.scripts.dest))
        .pipe(browserSync.stream());
});