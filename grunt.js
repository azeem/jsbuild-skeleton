module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({    
    coffeelint: {
      app: {
        files: ['src/js/*.coffee'],
        options: {
          indentation: {
            value: 4,
            level: 'warn'
          }
        }
      }
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

    handlebars: {
        compile: {
            options: {
                namespace: 'JST',
                wrapped: true,
                processName: function(filename) {
                    var splits = filename.split('/');
                    splits = splits[splits.length-1].split('.');
                    var name = splits[0];
                    return name;
                }
            },
            files: {
                'build/js/templates.js': ['src/templates/*.hbs']
            }
        }
    },

    copy: {
      target: {
        files: {
          'build/': 'src/*.html',
          'build/js/lib/': "src/js/lib/*.js",
          'build/css/blueprint/': 'blueprint-css/blueprint_build/*'
        }
      }
    },

  });

  // Load tasks from "grunt-sample" grunt plugin installed via Npm.
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-coffeelint');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-handlebars');

  // Default task.
  grunt.registerTask('default', 'coffeelint coffee less copy');

};