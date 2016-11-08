module.exports = function(grunt){
    grunt.initConfig({
        bowerInstall:{
          dist:{
              src: ['*.html'],
              dependencies: true,
              devDependencies: true,
              exclude:[],
          }  
        },
        autoprefixer:{
            dist:{
                options:{
                    diff:true
                },
                src:'css/main.css'
            }
        },
        cssmin:{
            dist:{
                files:{
                    'dist/css/main.css':'css/main.css'
                }
            }
        },
        uncss:{
            dist:{
                files:{
                    'dist/css/main.css': ['index.html']
                }
            }
        },
        uglify:{
            options:{
                report:'gzip'
            },
            dist:{
                files:{
                    'dist/js/main.js':['dist/js/main.js']
                }
            }
        },
        concat:{
            dist:{
                files:{
                    'dist/js/main.js':['js/*.js']
                }
            }
        }
    
    })
    grunt.loadNpmTasks('grunt-bower-install');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.registerTask('default',['bowerInstall','autoprefixer','cssmin','uglify'])
}