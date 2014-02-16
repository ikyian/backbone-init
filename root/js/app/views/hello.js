define(['underscore', 'zepto', 'backbone', 'jst'], 
function(_, $, Backbone, jst){
	return Backbone.View.extend({
		render : function(){
			this.$el.append(jst.hello({}));
			return this;
		}
	});
});