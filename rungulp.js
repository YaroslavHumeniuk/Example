// Execute gulp task
var command = 'node ./node_modules/gulp/bin/gulp.js default'
    , process = require('child_process').exec(command);
process.stdout.on('data', function(data) {console.log(data);});
process.stderr.on('data', function(data) {console.log(data);});
process.on('close', function(code) {if (code === 0) {console.log('Done');} else {console.log('Exit code: ' + code);}});