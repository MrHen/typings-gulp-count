import test = require('blue-tape');

import gulp = require('gulp');
import count = require('gulp-count');

test('gulp-count (string parameter)', (t) => {
  t.plan(1);
  gulp.src('assets/**.*')
      .pipe(gulp.dest('build'))
      .pipe(count('## assets copied'));

  t.assert(1 === 1);
});

test('gulp-count (no parameter)', (t) => {
  t.plan(1);
  gulp.src('assets/**.*')
      .pipe(gulp.dest('build'))
      .pipe(count()); // logs '36 files'

  t.assert(1 === 1);
});

test('gulp-count (with options)', (t) => {
  t.plan(1);
  gulp.src('assets/**.*')
      .pipe(gulp.dest('build'))
      .pipe(count('found ## pages', { logFiles: true }));

  t.assert(1 === 1);
});

test('gulp-count (only options)', (t) => {
  t.plan(1);
  gulp.src('assets/**.*')
      .pipe(gulp.dest('build'))
      .pipe(count({
        message: '<%= files %>? That\'s ## too many!',
        logger: (msg) => alert(msg)
      }));

  t.assert(1 === 1);
});

test('options interface', (t) => {
  t.plan(1);

  let options: count.Options = {
    message: 'template'
  };

  gulp.src('assets/**.*')
      .pipe(gulp.dest('build'))
      .pipe(count(options));

  t.assert(1 === 1);
});

test('options.message', (t) => {
  t.plan(1);
  gulp.src('assets/**.*')
      .pipe(gulp.dest('build'))
      .pipe(count({
        message: 'template'
      }));

  t.assert(1 === 1);
});

test('options.logFiles (boolean)', (t) => {
  t.plan(1);
  gulp.src('assets/**.*')
      .pipe(gulp.dest('build'))
      .pipe(count('found ## pages', {
        logFiles: true
      }));

  t.assert(1 === 1);
});

test('options.logFiles (string)', (t) => {
  t.plan(1);
  gulp.src('assets/**.*')
      .pipe(gulp.dest('build'))
      .pipe(count('found ## pages', {
        logFiles: 'template'
      }));

  t.assert(1 === 1);
});

test('options.cwd', (t) => {
  t.plan(1);
  gulp.src('assets/**.*')
      .pipe(gulp.dest('build'))
      .pipe(count('found ## pages', {
        cwd: '.'
      }));

  t.assert(1 === 1);
});

test('options.logger', (t) => {
  t.plan(1);
  gulp.src('assets/**.*')
      .pipe(gulp.dest('build'))
      .pipe(count('found ## pages', {
        logger: (msg) => {
          msg.toUpperCase();
        }
      }));

  t.assert(1 === 1);
});
