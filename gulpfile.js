var gulp = require('gulp');
var jade = require('gulp-jade');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber'); //避免程式出錯時，會讓其他動作不執行

var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');


// var gulp = require('gulp');
// var babel = require('gulp-babel');

// const babel = require('gulp-babel');


// 任務: 將source的index.html檔案引入
// gulp.task('copyHTML', function () {
//     return gulp.src('./source/**/*.html').pipe(gulp.dest('./public'))
// })

// 任務:將jade檔案編譯成 一般html
// gulp.task('jade', function () {
//     //   var YOUR_LOCALS = {};
//     gulp.src('./source/**/*.jade')
//         .pipe(plumber())
//         .pipe(jade({
//             //   locals: YOUR_LOCALS
//             pretty: true
//         }))
//         .pipe(gulp.dest('./public/'))
// });

// 任務:編譯sass
gulp.task('scss', function () {

    var plugins = [
        autoprefixer({browsers: ['last 5 versions', '>5%','IE 8']})
    ];
    return gulp.src('./source/scss/**.scss')
        .pipe(plumber())
        .pipe(sass().on('error', sass.logError))
        //編譯完成
        .pipe(postcss(plugins))
        .pipe(gulp.dest('./css/'));
});


gulp.task('watch', function () {
    gulp.watch('./source/scss/**.scss', ['scss']);
    // gulp.watch('./source/**/*.jade', ['jade']);
});

//合併

gulp.task('default', [ 'scss', 'watch'])

// babel
// gulp.task('babel', function () {
//     return gulp.src('quote/**/*.js')
//         // .pipe(babel())
//         .pipe(plumber())
//         .pipe(babel({
//             presets: ['env']
//         }))
//         .pipe(gulp.dest('./public/'));
// });






