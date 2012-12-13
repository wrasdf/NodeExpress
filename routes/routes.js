
var routes = require("../routes/logic.js");

module.exports = function(app){
	app.get('/',routes.index);
	app.get('/about', routes.about);
	app.get('/create', routes.create);
	app.get('/delete/id/:id', routes.deleteById);
	app.get('/view', routes.viewAll);
	app.get('/view/id/:id', routes.viewById);
	app.post('/update',routes.update);
	app.post('/update/id/:id',routes.updateById);
	// app.get('*',routes.Error404);
}



