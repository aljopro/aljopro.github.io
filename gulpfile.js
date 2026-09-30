import { src, watch, dest, series, task, parallel } from "gulp";
import gulpSass from 'gulp-sass';
import * as sassLib from 'sass';
import autoPrefixer from "gulp-autoprefixer";
import browserSync from 'browser-sync';

const config = {
	sass: './style/**/*.scss',
	sassDest: './style'
}

const sass = gulpSass(sassLib);

export function serveInit() {
	return browserSync.init({
		server: {
			baseDir: "./"
		}
	});
}

export function css() {
	return src(config.sass)
		.pipe(sass().on('error', sass.logError))
		.pipe(autoPrefixer({
			cascade: false
		}))
		.pipe(dest(config.sassDest))
		.pipe(browserSync.stream({ match: '**/*.css' }));
}

export function cssWatch() {
	watch(config.sass, series(['css']));
}

export function htmlWatch() {
	watch(['**/*.html', '!(node_modules)/**/*']).on('change', browserSync.reload);
}

export function jsWatch() {
	watch(['**/*.js', '!(node_modules)/**/*']).on('change', browserSync.reload);
}

export const serve = parallel([serveInit, cssWatch, htmlWatch, jsWatch]);
