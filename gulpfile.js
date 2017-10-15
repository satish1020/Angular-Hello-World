//var gulp = require("gulp");
//var ts = require("gulp-typescript");
//var tsProject = ts.CreateProject("tsconfig.json");


//gulp.task("default",)
var gulp = require('gulp');
var ts= require('gulp-typescript');
//webserver = require('gulp-webserver'),
var tsProject = ts.createProject("tsconfig.json");
var sourcemaps = require('gulp-sourcemaps');
var tscConfig = require('./tsconfig.json');

//default task
gulp.task("default", function () {
    return tsProject.src()
        .pipe(sourcemaps.init())  //inititalize source map
        .pipe(tsProject()).js //compile the project
        .pipe(sourcemaps.write("."))  //write source maps to the current folder
        .pipe(gulp.dest("app"));  // compilation of all this has to be writtern into app folder
});


//dev task
gulp.task('dev', function () {
    gulp.watch('app/**/*.ts', ['default']);   // it will watch new ts files created or modified it will call defaul task 
    //and compile
});
//var appSrc = 'builds/development/',
//    tsSrc = 'process/typescript/';

//gulp.task('html', function () {
//    gulp.src(appSrc + '**/*.html');
//});

//gulp.task('css', function () {
//    gulp.src(appSrc + '**/*.css');
//});

//gulp.task('copylibs', function () {
//    return gulp
//        .src([
//            'node_modules/es6-shim/es6-shim.min.js',
//            'node_modules/systemjs/dist/system-polyfills.js',
//            'node_modules/angular2/bundles/angular2-polyfills.js',
//            'node_modules/systemjs/dist/system.src.js',
//            'node_modules/rxjs/bundles/Rx.js',
//            'node_modules/angular2/bundles/angular2.dev.js'
//        ])
//        .pipe(gulp.dest(appSrc + 'js/lib/angular2'));
//});

//gulp.task('typescript', function () {
//    return gulp
//        .src(tsSrc + '**/*.ts')
//        .pipe(sourcemaps.init())
//        .pipe(typescript(tscConfig.compilerOptions))
//        .pipe(sourcemaps.write('.'))
//        .pipe(gulp.dest(appSrc + 'js/'));
//});

//gulp.task('watch', function () {
//    gulp.watch(tsSrc + '**/*.ts', ['typescript']);
//    gulp.watch(appSrc + 'css/*.css', ['css']);
//    gulp.watch(appSrc + '**/*.html', ['html']);
//});

//gulp.task('webserver', function () {
//    gulp.src(appSrc)
//        .pipe(webserver({
//            livereload: true,
//            open: true
//        }));
//});

//gulp.task('default', ['copylibs', 'typescript', 'watch', 'webserver']);
