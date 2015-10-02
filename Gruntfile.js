module.exports = function(grunt) {

  grunt.initConfig({
    connect: {
      server: {}
    },

    watch: {
      html: {
        files: ['index.html']
      },
      options: {
        livereload: true
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', 'Start a web server and watch for changes',
      ['connect', 'watch']
  );
};
