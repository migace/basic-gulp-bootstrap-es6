import config from '../config';
import gulp   from 'gulp';

gulp.task('watch', ['browserSync'], function() {
    global.isWatching = true;

    // Scripts are automatically watched and rebundled by Watchify inside Browserify task    
    gulp.watch(config.scripts.src, ['js']);
    gulp.watch(config.views.src, ['views']);
});
