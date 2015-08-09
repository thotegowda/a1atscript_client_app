requirejs.config({
	baseUrl:'./',
	paths: {
		jquery: 'node_modules/jquery/dist/jquery',
		moment: 'node_modules/moment/moment'
	}
});

require("./app.css");
require(['./main']);

