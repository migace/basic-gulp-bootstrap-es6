import fs 			from 'fs';
import gulp 	    from 'gulp';
import onlyScripts  from './util/scriptFilter';

const tasks = fs.readdirSync('./gulp/tasks/').filter(onlyScripts);

gulp.on('stop', function () {
  	if ( !global.isWatching ) {
    	process.nextTick(function () {
      		process.exit(0);
    	});
  	}
});

tasks.forEach((task) => {
  	require('./tasks/' + task);
});
