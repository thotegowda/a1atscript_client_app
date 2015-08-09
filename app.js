requirejs.config({
	baseUrl:'./',
	paths: {
		jquery: 'node_modules/jquery/dist/jquery.min',
		moment: 'node_modules/moment/min/moment.min'
	}
});

require("./app.css");
require(['./main']);

