var gulp = require("gulp");
var swig = require('gulp-swig');
const { parallel } = require('gulp');

async function templates (){
 return  gulp.src('./public/blog/*.html')
    .pipe(swig({varControls: ['<%=', '%>'],
      }))
      
    .pipe(gulp.dest('./public/article'))
}
async function index (){
 return  gulp.src('./public/temp/*.html')
    .pipe(swig({varControls: ['<%=', '%>'],
      }))

    .pipe(gulp.dest('./public/'))
}

gulp.task("default",async function(){

  templates();
  index();
})
