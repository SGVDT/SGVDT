var gulp = require('gulp');
var eslint = require('gulp-eslint');
var mocha = require('gulp-mocha');

var paths = {
  scripts: [__dirname + '/lib/*.js', __dirname + '/index.js'],
  test: [__dirname + 'test/test.js']
};

gulp.task('lint:test', () => {
  return gulp.src(paths.test)
    .pipe(eslint({
      envs: [
        'mocha',
        'es6'
      ]
    }))
    .pipe(eslint.format());
});

gulp.task('lint:nontest', () => {
  return gulp.src(paths.scripts)
    .pipe(eslint({
      envs: [
        'es6'
      ]
    }))
    .pipe(eslint.format())
});

gulp.task('mocha', () => {
  return gulp.src(paths.test)
    .pipe(mocha());
});

gulp.task('default', ['lint:test', 'lint:nontest', 'mocha']);
