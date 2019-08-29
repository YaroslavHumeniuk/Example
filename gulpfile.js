const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();
const ts = require('gulp-typescript');
const browserSync = require('browser-sync').create();

gulp.task('clean', function() {
    return gulp.src('./dist', {read: false})
        .pipe(plugins.clean());
});

gulp.task('css', function() {
    return gulp.src([
        './src/sass/*.scss',
    ])
        // .pipe(plugins.sourcemaps.init())
        .pipe(plugins.sass().on('error', plugins.sass.logError))
        .pipe(plugins.cssmin())
        .pipe(plugins.autoprefixer())
        // .pipe(plugins.sourcemaps.write())
        .pipe(gulp.dest('./dist/css'))
        .pipe(browserSync.stream());
});

gulp.task('tss', function () {
    return gulp.src('src/js/**/*.ts')
        .pipe(ts({
            noImplicitAny: true,
            outFile: 'scripts.js'
        }))
        .pipe(gulp.dest('dist/js'));
});

// gulp.task('js', function(){
//     return gulp.src([
//         // './node_modules/jquery/dist/jquery.min.js',
//         // './node_modules/moment/min/moment.min.js',
//         'src/base/jquery.slim.min.js',
//         'src/base/bootstrap.min.js',
//         'src/base/scripts.js',
//         'src/base/app.js',
//         'src/js/magic.js',
//         'src/js/admin.js'
//     ])
//         .pipe(plugins.babel({
//             presets: ['es2015']
//         }))
//         // .pipe(plugins.sourcemaps.write())
//         .pipe(plugins.concat('all.js'))
//         // .pipe(plugins.uglify())
//         .pipe(gulp.dest('./dist/js'))
//         .pipe(browserSync.stream());
// });

gulp.task('watch', function(){
    gulp.watch('./src/sass/**/*.scss', ['css']);
    gulp.watch('./src/js/**/*.ts', ['tss']);
});

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });

    gulp.watch('*.html').on('change', browserSync.reload);
});


gulp.task('default', ['css', 'tss', 'watch', 'serve']);