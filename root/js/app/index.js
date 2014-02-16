require(['underscore', 'zepto', 'backbone', 'views/hello'], 
function(_, $, Backbone, HelloView){

    var view = new HelloView({
        el : $('body')
    });

    view.render();
});