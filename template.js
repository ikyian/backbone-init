exports.description = 'backbone project';

exports.template = function(grunt, init, done){
	init.process({}, [
			init.prompt('name'),
			init.prompt('description'),
			init.prompt('version', '0.0.1'),
			init.prompt('author_name'),
			init.prompt('author_url'),
			init.prompt('license', 'MIT')
		],
		function(err, props){
			var files = init.filesToCopy(props);
			//init.addLicenseFiles(files, props.license);
			init.copyAndProcess(files, props);
			init.writePackageJSON('package.json', {
				"name": props.name,
				"version": props.version,
				"description": props.description,
				"author": props.author,
			//	"license": props.licenses,
				"scripts" : {
					postinstall : './node_modules/.bin/bower --config.directory=js/lib install'
				},
				"devDependencies": {
					"bower" : "1.2.8",
					"grunt": "~0.4.2",
					"grunt-contrib-clean": "~0.5.0",
					"grunt-contrib-compass": "~0.7.2",
					"grunt-contrib-jshint": "~0.8.0",
					"grunt-contrib-jst": "~0.5.1"
				}				
			}, function(pkg, props){
				// customization
				pkg.bundle = 'index';
				return pkg;
			});
		}
	);
};