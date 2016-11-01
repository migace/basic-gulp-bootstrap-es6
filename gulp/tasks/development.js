import gulp        from 'gulp';
import runSequence from 'run-sequence';

gulp.task('dev', ['clean'], function(cb) {
    runSequence(['js', 'views'], 'watch', cb);
});
