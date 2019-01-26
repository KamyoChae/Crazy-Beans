let gulp = require("gulp")

let babel = require('gulp-babel')

let autoprefixer = require('gulp-autoprefixer')
let cleanCss = require('gulp-clean-css')
let less = require('gulp-less')

let htmlClean = require('gulp-htmlclean')

let imagemin = require('gulp-imagemin')

let stripDebug = require('gulp-strip-debug')
let uglify = require('gulp-uglify')

let cancat = require('gulp-concat') // 合并js 文件

let connect = require('gulp-connect')

let path_src = {
    hide_game:"src/hide_game/"
}
let path_middle = {
    middle : "middleware/"
}

gulp.task('connect',function(){
    connect.server({
        livereload:true,//自动更新
        port:9909//端口
    })
})



gulp.task('html',function(){
    return gulp.src(path_src.hide_game + "*.html")
        .pipe(gulp.dest("middleware/html/"))
        .pipe(connect.reload())
})



gulp.task('watchs',function(){
    gulp.watch(path_src.hide_game + "*.html",gulp.series('html')); 
})

gulp.task('default',gulp.series(
    gulp.parallel('html','watchs','connect')
)
);