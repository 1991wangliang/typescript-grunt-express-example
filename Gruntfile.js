module.exports = function(grunt) {
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      ts: {
        default : {
            tsconfig: './tsconfig.json',
        }
      },
      watch:{
        files: ['src/**/*.ts'],
        tasks: ['ts']
      },
    });
    grunt.loadNpmTasks("grunt-ts");
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask("default", ["ts"]);
  };