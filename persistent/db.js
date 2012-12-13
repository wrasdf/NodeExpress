var mongoose = require('mongoose'),
	db = mongoose.createConnection('mongodb://localhost/smartDB');
	Schema = mongoose.Schema;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () { console.log("DB is starting.");});

var GuidMap = new Schema({
	noteId : Number
});

var ListPost = new Schema({
	id : Number,
	title : String,
	content : String,
	update_date : Date
}).method("getMaxId",function(){
	return this.id;
});

var HeaderDetail = new Schema({
	name : String,
	description : String,
	update_date : Date
});


module.exports = {
	listModel : db.model('ListPost',ListPost),
	headerModel : db.model('HeaderDetail',HeaderDetail),
	guidMap : db.model('GuidMap',GuidMap))
};