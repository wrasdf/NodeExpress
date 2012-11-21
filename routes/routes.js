
var routes = require("../routes/index.js");

module.exports = function(app){
	app.get('/', routes.index);
	app.get('/about', routes.about);
	app.get('/contact', routes.contact);
}

