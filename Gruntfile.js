module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    stylus: {
      compile: {
        files: {
          'dist/floaty-clicky-thing.css': 'style/*.styl'
        }
      }
    },
    uglify: {
      lib: {
        files: {
          'dist/floaty-clicky-thing.js' : ['lib/floaty-clicky-thing.js']
        }
      }
    },
    jshint: {
      files: ['Gruntfile.js', 'lib/**/*.js'],
    },
    watch: {
      files: ['lib', 'style'],
      tasks: ['jshint', 'stylus', 'uglify']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['jshint', 'stylus', 'uglify', 'watch']);

};
