module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch:{
            css: {
                files: 'sass/*.scss',
                tasks: ['sass', 'concat:styles']
            },
            js: {
                files: 'js/*.js',
                tasks: ['concat:dist']
            }
            
        },
        concat:{
            options: {
                separator: "\n\n"
            },
            dist: {
                src: ['bower_components/angular/angular.min.js','js/main.js'],
                dest: 'bin/app.js'
            },
            styles: {
                src: ['bower_components/bootstrap/dist/css/bootstrap.min.css','css/style.css'],
                dest: 'css/final.css'
            }
            
        },
        uglify: {
            options: {
                mangle: false
            },
            my_target: {
                files:{
                    'bin/js/app.min.js' : ['bin/app.js']
                }
            }
        },
        sass:{
            dist: {
                    files: {
                        'css/style.css' : 'sass/*.scss'
                    }
                 }
        },
		copy: {
		  files: {
			cwd: 'bower_components/bootstrap/fonts',  // set working folder / root to copy
			src: '**/*',           // copy all files and subfolders
			dest: 'fonts',    // destination folder
			expand: true           // required when using cwd
		  }
		}
    });
    //Load task
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-copy');
    
    //Register tasks
    grunt.registerTask('default',['concat','uglify', 'sass']);
    
}