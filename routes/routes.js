
var routes = require("../routes/index.js");

module.exports = function(app){
	app.get('/',routes.index);
	app.get('/about', routes.about);
	app.get('/create', routes.create);
	app.get('/view/id/:id', routes.viewById);
	app.get('/delete/id/:id', routes.deleteById);
	app.post('/update',routes.update);
	app.post('/update/id/:id',routes.updateById);
}



