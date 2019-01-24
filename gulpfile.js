var gulp = require('gulp'),
    del = require('del'),
    // vinylPaths = require('vinyl-paths'),
    // typescript = require('gulp-typescript'),
    // concat = require('gulp-concat'),
    del = require('del'),
    browserify = require('browserify'),
    tsify = require('tsify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    browserSync = require('browser-sync').create(),
    reload = browserSync.reload;



gulp.task('copyIndex', function()
{
	return gulp.src('src/index.html')
        .pipe(gulp.dest('./build'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('typescript', function()
{
    return browserify('./src/app.ts')
        .plugin(tsify)
        .bundle()
        .pipe(source('app.js'))
        .pipe(buffer())
        .pipe(gulp.dest('./build'));
});

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: './build'
        }
    });
    gulp.watch('./src/index.html', gulp.series('copyIndex')).on("change", reload);
    gulp.watch('src/**/*.ts', gulp.series('typescript')).on("change", reload);    
});



gulp.task('clean', function() {
    return del(['./build']);
});



gulp.task('default', gulp.series('copyIndex', 'typescript', 'serve'));