/* Requires */

var gulp = require('gulp'),
	sass = require('gulp-sass'),
	concat = require('gulp-concat'),
	webserver = require('gulp-webserver');

/* Compile CSS and JS */

var sassSrc = './app/scss/**/*.scss',
	scriptsAppSrc = './app/js/*.js',
	scriptsVendorSrc = [
		'./app/bower_components/angular/angular.js',
		'./app/bower_components/angular-ui-router/release/angular-ui-router.js'
	],
	compileDest = './app/dist';

gulp.task('sass', function() {
	gulp.src(sassSrc)
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest(compileDest));
});

gulp.task('scripts:app', function() {
	gulp.src(scriptsAppSrc)
		.pipe(concat('app.js'))
		.pipe(gulp.dest(compileDest));
});

gulp.task('scripts:vendor', function() {
	gulp.src(scriptsVendorSrc)
		.pipe(concat('vendor.js'))
		.pipe(gulp.dest(compileDest));
});

gulp.task('watch', function() {
	gulp.watch(sassSrc, ['sass']);
	gulp.watch(scriptsAppSrc, ['scripts:app']);
	gulp.watch(scriptsVendorSrc, ['scripts:vendor']);
});

gulp.task('compile', [
	'sass',
	'scripts:app',
	'scripts:vendor'
]);

/* Local Server */

gulp.task('server', function() {
	gulp.src('app')
		.pipe(webserver({
			host: 'localhost',
			port: '1113'
		}));
});

/* Default */

gulp.task('default', ['compile', 'watch', 'server']);
