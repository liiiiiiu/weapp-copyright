let gulp = require('gulp'),
  clean = require('gulp-clean'),
  changed = require('gulp-changed'),
  pump = require('pump')

const sourceWeappDir = 'src'
const distWeappDir = 'dist'

// 清理目标文件目录
const cleanWeappTask = function cleanWeappTask(cb) {
  pump([
    gulp.src(distWeappDir, {
      allowEmpty: true
    }),
    clean()
  ], cb)
}

// 拷贝源文件目录
const copyWeappTask = function copyTask(cb) {
  pump([
    gulp.src([
      sourceWeappDir + '/components/Copyright/*.js',
      sourceWeappDir + '/components/Copyright/*.json',
      sourceWeappDir + '/components/Copyright/*.wxml',
      sourceWeappDir + '/components/Copyright/*.wxss',
    ]),
    changed(distWeappDir + '/Copyright'),
    gulp.dest(distWeappDir + '/Copyright')
  ], cb)
}

// 监听源文件目录变化
const watchWeappTask = function watchWeappTask(cb) {
  gulp.watch(
    [
      sourceWeappDir + '/components/Copyright/*.js',
      sourceWeappDir + '/components/Copyright/*.json',
      sourceWeappDir + '/components/Copyright/*.wxml',
      sourceWeappDir + '/components/Copyright/*.wxss'
    ],
    gulp.series(cleanWeappTask, copyWeappTask
  ))
}

// 执行gulp
gulp.task('default', gulp.series(cleanWeappTask, copyWeappTask, watchWeappTask))