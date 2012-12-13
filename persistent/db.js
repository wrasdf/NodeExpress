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

var AccountDetail = new Schema({
	name : String,
	description : String,
	update_date : Date
});


var ListModel = db.model('ListPost',ListPost);
var AccountModel = db.model('AccountDetail',AccountDetail);

module.exports = {
	listModel : ListModel,
	accountDetail : AccountDetail
};