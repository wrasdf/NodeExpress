var listModel = require("../persistent/db.js").listModel;

exports.index = function(req, res){
  res.render('index', { title: 'index' });
};

exports.about = function(req, res){
  res.render('about', { title: 'about' });
};

exports.create = function(req, res){
  res.render('create', { title: 'create' });
};

exports.update = function(req, res){
	
	var subTitle = req.body["title"] || "UnTitled";
    var subContent = req.body["post-content"] || "No content";

	new listModel({
  		title : subTitle,
    	content    : subContent,
    	update_date : Date.now()
  	}).save( function( err,data){
    	res.redirect( '/view/id/'+ data._id);
  	});
	
};

exports.view = function(req, res){
	var id = req.params.id;
	console.log(listModel.find());
	listModel.find({id:id},function(){
  		res.render('view', { 'subTitle': this.title, 'subContent':this.content , 'title' : 'view'});  
	});
};


