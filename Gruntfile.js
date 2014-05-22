module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-angular-gettext');

    grunt.initConfig({

        yeoman: {
            // configurable paths
            app: 'app',
            tmp: 'tmp',
            dist: 'prod'
        },

        pkg: grunt.file.readJSON("package.json"),

        nggettext_extract: {
            pot: {
                files: {
                    'po/template.pot': ['<%= yeoman.app %>/views/*.html']
                }
            }
        },
        nggettext_compile: {
            all: {
                files: {
                    '<%= yeoman.app %>/js/translations.js': ['po/*.po']
                }
            }
        }
    });


    grunt.registerTask("build", ['nggettext_extract','nggettext_compile']);
};

