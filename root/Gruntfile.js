module.exports = function(grunt){
	grunt.initConfig({
		pkg : grunt.file.readJSON('package.json'),
		clean : {
			project : ['css', '<%= pkg.bundle %>.jst.min.js']
		},

		compass : {
			dev : {
				options : {
	                sassDir: 'scss',
	                cssDir: 'css',
	                outputStyle: 'expanded',
	                relativeAssets: true,
	                imagesDir: 'images',
	                fontsDir: 'fonts'
				}
			}
		},

		jshint : {
            options: {
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                boss: true,
                eqnull: true,
                node: true,
                globals: {
                    exports: true,
                    //document
                    window: false,
                    document: false,
                    // require.js
                    define: false
                },
            },
            src: 'js/app/**/*js'

		},

        jst : {
            compile: {
                options: {
                    amd : true,
                    processName : function(path){
                        var re = /(js\/app\/templates\/)(.*)(\.html$)/;
                        return re.exec(path)[2];
                    }
                },
                files: {
                    "<%= pkg.bundle %>.jst.min.js": ["js/app/templates/**/*.html"]
                }
            }
        }

	});

	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jst');

	grunt.registerTask('build', ['jshint', 'compass', 'jst']);
	grunt.registerTask('default', ['build']);
};