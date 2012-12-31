/*global module:false*/
module.exports = function (grunt) {

  var exec = require('child_process').exec;
  var root = __dirname;
  var compressor = require('node-minify');
  var buildFile = grunt.file.readJSON('build/build.json');

  // Project configuration.
  grunt.initConfig({
    pkg : grunt.file.readJSON('package.json')
  });

  grunt.registerTask('clean',function(){
    
    var shell = 'cd '+root+' && ';

    // clean js files
    shell += 'rm -rdf public/js/ && ';
    shell += 'mkdir public/js/ && ';

    // clean css files
    shell += 'rm -rdf public/css/ && ';
    shell += 'mkdir  public/css/';
    
    // copy images
    shell += 'cp -av '+root+'/development/images/* ' +root+'/public/images/';

    exec(shell, function(err, stdout, stderr) {
        if (err) throw err;
        grunt.log.write(stdout);
    });

  });

  grunt.registerTask('compress',function(){

    for(i in buildFile.compress.js){
      new compressor.minify({
          type: 'gcc',
          fileIn: buildFile.compress.js[i].src,
          fileOut: buildFile.compress.js[i].dest,
          callback: function(err){
              console.log(err);
          }
      });
    };

    for(i in buildFile.compress.css){
      new compressor.minify({
          type: 'yui-css',
          fileIn: buildFile.compress.css[i].src,
          fileOut: buildFile.compress.css[i].dest,
          callback: function(err){
              console.log(err);
          }
      });
    };


  });

  // Default task.
  grunt.registerTask('default', 'clean compress');

};