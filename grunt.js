module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({    
    coffeelint: {
      app: ['src/js/*.coffee']
    },

    coffee: {
      compile : {
        files: {
          'build/js/*.js': 'src/js/*.coffee'
        }        
      }
    },

    less: {
      development: {
        options: {
          paths: ['src/css']
        },
        files: {
          'build/css/*.css': 'src/css/*.less'
        }
      }
    },

    copy: {
      target: {
        files: {
          'build/': 'src/*.html',
          'build/css/blueprint/': 'blueprint-css/blueprint_build/*'
        }
      }
    },

    // clean: {
    //   build: ['build'],
    //   options: {}
    // }

  });

  // Load tasks from "grunt-sample" grunt plugin installed via Npm.
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-coffeelint');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-copy');
//  grunt.loadNpmTasks('grunt-contrib-clean');

  // Default task.
  grunt.registerTask('default', 'coffeelint coffee less copy');

};