var listModel = require("../persistent/db.js").listModel;
var Common = require("../common/common.js").Common;

exports.Error404 = function(req,res){
  res.render('errors/404',{
    status : 404,
    title : "404 Not Found."
  });
}

exports.index = function(req, res){

  listModel.find({}).sort({"update_date": -1}).limit(5).find(function(err,data){
    res.render('features/index', { title: 'index', nodeList : data});
  });

};

exports.about = function(req, res){
  res.render('features/about', { title: 'About Me' });
};

exports.create = function(req, res){
  res.render('features/create', { title: 'Create your daily notes.' });
};

exports.update = function(req, res){

  var subTitle = req.body["title"] || "UnTitled";
  var subContent = req.body["post-content"] || "No content";

  new listModel({
      id : Common.guid(),
      title : subTitle,
      content    : subContent,
      update_date : Date.now()
  }).save( function( err,data){
      res.redirect( '/view/id/'+ data.id);
  });
  
};

exports.updateById = function(req,res){

  var id = req.params.id;
  var subTitle = req.body["title"] || "UnTitled";
  var subContent = req.body["post-content"] || "No content";

  listModel.findOne({id:id},function(err,data){
    data.title = subTitle;
    data.content = subContent;
    data.save(function(err){
      if(err){
        console.log("error");
      }else{
        res.redirect( '/view/id/'+ data.id);
      }
    });  
  });
    
}


exports.viewById = function(req, res){
	var id = req.params.id;
	listModel.findOne({id:id},function(err,data){
  		res.render('features/view', { 
        'subTitle': data.title, 
        'subContent':data.content , 
        'id' : id,
        'title' : 'view'
      });  
	});
};

exports.viewAll = function(req, res){
  listModel.find({}).sort({"update_date": -1}).find(function(err,data){
    res.render('features/viewAll', { title: 'index', nodeList : data});
  });
};


exports.deleteById = function(req, res){
  var id = req.params.id;
  listModel.remove({id:id},function(err,data){
      if(err){
        res.send({"status":"error"});
        return;    
      }
      res.send({"status":"success"});  
  });
};
