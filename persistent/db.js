var mongoose = require('mongoose'),
	db = mongoose.createConnection('localhost', 'smartDB');
	Schema = mongoose.Schema;	

var ListPost = new Schema({
	id : Number,
	title : String,
	content : String,
	update_date : Date,
	rating : Number
}).method("increaseRating",function(){
	this.rating += 1;
	return this.rating;
}).method("decreaseRating",function(){
	this.rating -= 1;
	return this.rating;
});

PostModel = mongoose.model('ListPost',ListPost);
