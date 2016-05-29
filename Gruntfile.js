module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            // if any .less file changes in directory "public/css/" run the "less"-task.
            files: "less/*.less",
            tasks: ["less"],
            options: {
                livereload: true,
            },
        },

        less: {
            development: {
                options: {
                    paths: ['less/']
                },
                files: {
                    'css/site.css': 'less/site.less'
                }
            }
        },

        cssmin: {
            dist: {
                options: {
                    banner: '/*! MyLib.js 1.0.0 | Aurelio De Rosa (@AurelioDeRosa) | MIT Licensed */'
                },
                files: {
                    'css/main.min.css': ['css/style.css']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['watch']);

};