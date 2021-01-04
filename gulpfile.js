const {src, watch, dest, series, task, parallel} = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();


const config = {
	sass: './style/**/*.scss',
	sassDest: './style'
}

function serveInit() {
	return browserSync.init({
		server: {
			baseDir: "./"
		}
	});
}

function css() {
	return src(config.sass)
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
			cascade: false
		}))
		.pipe(dest(config.sassDest))
		.pipe(browserSync.stream({match: '**/*.css'}));
}

function cssWatch() {
	watch(config.sass, series(['css']));
}

function htmlWatch() {
	watch(['**/*.html', '!(node_modules)/**/*']).on('change', browserSync.reload);
}

function jsWatch() {
	watch(['**/*.js', '!(node_modules)/**/*']).on('change', browserSync.reload);
}

const serve = parallel([serveInit, cssWatch, htmlWatch, jsWatch]);


module.exports = {
	default: serve,
	serve,
	htmlWatch,
	css,
	cssWatch,
}