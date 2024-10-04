const { src, pipe, run, dest, watch } = require('gulp');
var uglify = require('gulp-uglify');

function dev() {
  watch(
    ['./client/**/*'],
    { events: 'all', ignoreInitial: false },
    function (cb) {
      src('./client/**/*').pipe(dest('./dist/client'));
      return cb();
    },
  );

  watch(
    ['./templates/**/*'],
    { events: 'all', ignoreInitial: false },
    function (cb) {
      src('./templates/**/*').pipe(dest('./dist/templates'));
      return cb();
    },
  );
}

function clientMinification(cb) {
  src('./client/**/*').pipe(uglify()).pipe(dest('./dist/client'));

  src('./templates/**/*').pipe(dest('./dist/templates'));

  return cb();
}

exports.build = clientMinification;

exports.dev = dev;
