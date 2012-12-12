var mongoose = require('mongoose'),
	db = mongoose.createConnection('mongodb://localhost/smartDB');
	Schema = mongoose.Schema;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () { console.log("DB is starting.");});

var ListPost = new Schema({
	id : String,
	title : String,
	content : String,
	update_date : Date
}).method("getId",function(){
	return this.id;
});

var ListModel = db.model('ListPost',ListPost);

module.exports = {
	listModel : ListModel
};