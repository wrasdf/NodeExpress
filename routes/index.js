// require("../persistent/db.js");

exports.index = function(req, res){
  res.render('index', { title: 'index' });
};

exports.about = function(req, res){
  res.render('about', { title: 'about' });
};

exports.create = function(req, res){
  res.render('create', { title: 'create' });
};

exports.view = function(req, res){

  var subTitle = req.body["title"] || "UnTitled";
  var subContent = req.body["post-content"] || "No content";

  // new PostModel({
  	// title : subTitle,
    // content    : subContent,
    // update_date : Date.now()
  // }).save( function( err ){
    res.render('view', { 'subTitle': subTitle, 'subContent':subContent , 'title' : 'view'});  
  // });

  
  
};