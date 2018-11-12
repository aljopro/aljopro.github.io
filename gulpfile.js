const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();

const config = {
	sass: './style/**/*.scss',
	sassDest: './style'
}

function serve() {
	return browserSync.init({
		server: {
			baseDir: "./"
		}
	});
}

function css() {
	return gulp.src(config.sass)
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe(gulp.dest(config.sassDest))
		.pipe(browserSync.stream({match: '**/*.css'}));
}

function cssWatch() {
	gulp.watch(config.sass, ['css']);
}

function htmlWatch() {
	gulp.watch(['**/*.html', '!(node_modules)/**/*']).on('change', browserSync.reload);
}

function jsWatch() {
	gulp.watch(['**/*.js', '!(node_modules)/**/*']).on('change', browserSync.reload);
}


gulp.task('serve', ['css:watch', 'html:watch', 'js:watch'], serve);
gulp.task('css', css);
gulp.task('css:watch', cssWatch);
gulp.task('html:watch', htmlWatch);
gulp.task('js:watch', jsWatch);
