module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    banner:
      '/*!\n' +
      ' * <%= pkg.name %> v<%= pkg.version %>\n' +
      ' *\n' +
      ' * BREAKPOINT DIRECTIVE FOR RESPONSIVE WEBSITES\n' +
      ' *\n' +
      ' *  https://github.com/snapjay/angularjs-breakpoint\n' +
      ' *  http://snapjay.github.com/angularjs-breakpoint/\n' +
      ' *\n' +
      ' *  Apply as a attribute of the body tag. Set\n' +
      ' *  breakpoint="{1250:\'break1250\', 1000:\'break1000\',1120:\'break1120\'}\n' +
      ' *\n' +
      ' *  Values are available on scope as\n' +
      ' *  {{breakpoint.class}} = current set class\n' +
      ' *  {{breakpoint.windowSize}} = current width of window\n' +
      ' */\n',

    concat: {
      options: {
        banner: '<%= banner %>',
        stripBanners: false
      },
      application: {
        src: ['js/breakpoint.js'],
        dest: '<%= pkg.title %>-<%= pkg.version %>.js'
      }
    },

    uglify: {
      options: {
        banner: '<%= banner %>'
      },
      application: {
        src: ['<%= concat.application.dest %>'],
        dest: '<%= pkg.title %>-<%= pkg.version %>.min.js'
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('build', ['concat', 'uglify']);
};