var listModel = require("../persistent/db.js").listModel;

function guid() {
    function S4() {
       return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }
    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}



exports.index = function(req, res){
  res.render('index', { title: 'index' });
};

exports.about = function(req, res){
  res.render('about', { title: 'about' });
};

exports.create = function(req, res){
  res.render('create', { title: 'create' });
};

exports.updateById = function(req,res){

  var id = req.params.id;
  var subTitle = req.body["title"] || "UnTitled";
  var subContent = req.body["post-content"] || "No content";
  

  listModel.find({id:id},function(err,data){
    // var item = data[0];
    data.subTitle = subTitle;
    data.subContent = subContent;
    data.save(function(err){
      if(err){
        console.log("error");
      }else{
        console.log("success");
        console.log(data);
        // res.render('view', { 'subTitle': data.title, 'subContent':data.content , 'title' : 'view'});  
        res.redirect( '/view/id/'+ data.id);
      }
    });  
  });
    
}

exports.update = function(req, res){

  var subTitle = req.body["title"] || "UnTitled";
  var subContent = req.body["post-content"] || "No content";
  new listModel({
      id : guid(),
      title : subTitle,
      content    : subContent,
      update_date : Date.now()
  }).save( function( err,data){
      res.redirect( '/view/id/'+ data.id);
  });
	
};

exports.viewById = function(req, res){
	var id = req.params.id;
	listModel.find({id:id},function(err,data){
      var data = data[0];
            console.log(data);
  		res.render('view', { 
        'subTitle': data.title, 
        'subContent':data.content , 
        'id' : id,
        'title' : 'view'
      });  
	});
};


