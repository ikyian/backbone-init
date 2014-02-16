require.config({

	baseUrl: 'js/app',

	paths : {
		app : 'index',
		jst : '../../index.jst.min',

		underscore : '../lib/require-backbone-libs/underscore/underscore',
		zepto : '../lib/require-backbone-libs/zepto/zepto',
		backbone : '../lib/require-backbone-libs/backbone/backbone'
    },

	shim   : {
		zepto : {
			exports : 'Zepto'
		},
	},
	map    : {
		'backbone' : {
			jquery: 'zepto'	
		}
	}
});

require(['app']);