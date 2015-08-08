requirejs.config({
	baseUrl:'./',
	paths: {
		jquery: 'node_modules/jquery/dist/jquery',
		moment: 'node_modules/moment/moment'
	}
});

requirejs(['jquery', 'message'], function($, message) {
	$('#date').html(message);
});

