const babelLib = 'babel';
const babelOutput = '--out-dir';

const componentPath =  [
	'echo "Webpack Start"', 
	 babelLib + ' src/folder1/ ' +babelOutput+ ' src/folder1/lib',
	 babelLib + ' src/folder2/ ' +babelOutput+ ' src/folder2/lib'
];

module.exports = componentPath;

