var noteProvider = require("../persistent/noteProvider.js");

exports.Error404 = function(req,res){
  res.render('errors/404',{
    status : 404,
    title : "404 Not Found.",
    compressJs : "all-header.min.js"
  });
}

exports.index = function(req, res){

  noteProvider.findByOptions({},function(err,data){
    if(err){
      conosole.log("DB Error.");
    }else{
      res.render('features/index', { title: 'index', nodeList : data, compressJs : "all-header.min.js" });
    }
  },5);

};

exports.about = function(req, res){
  res.render('features/about', { title: 'About Me', compressJs : "all-header.min.js" });
};

exports.create = function(req, res){
  res.render('features/create', { title: 'Create your daily notes.', compressJs : "all-header.min.js" });
};

exports.update = function(req, res){

  var subTitle = req.body["title"] || "UnTitled";
  var subContent = req.body["post-content"] || "No content";

  noteProvider.createNote({
      title : subTitle,
      content : subContent
  },function(err,data){
    if(err){
      console.log("DB create note error.");
    }else{
      res.redirect( '/view/id/'+ data.id);  
    }
    
  });
  
};

exports.updateById = function(req,res){

  var id = req.params.id;
  var subTitle = req.body["title"] || "UnTitled";
  var subContent = req.body["post-content"] || "No content";

  noteProvider.updateNotes(
    {id:id},
    {
      title : subTitle,
      content : subContent
    },
    function(err){
      if(err){
        console.log("error");
      }else{
        res.redirect( '/view/id/'+ id);
      }
    }
  );
    
}


exports.viewById = function(req, res){
	var id = req.params.id;
  
  noteProvider.findByOptions({id:id},function(err,data){
    if(err){
      console.log("DB view id Error.");
    }else{
      res.render('features/view', { 
        'subTitle': data[0].title, 
        'subContent':data[0].content , 
        'id' : id,
        'title' : 'view',
        'compressJs' : 'all-view.min.js'
      });
    }
  });

};

exports.viewAll = function(req, res){
  noteProvider.findByOptions({},function(err,data){
    if(err){
      conosole.log("DB view all Error.");
    }else{
      console.log(data);
      res.render('features/viewAll', { title: 'index', nodeList : data, compressJs : "all-header.min.js" });  
    }
  });
};


exports.deleteById = function(req, res){
  var id = req.params.id;
  noteProvider.deleteNoteByOptions({id:id},function(err){
      if(err){
        res.send({"status":"error"});
        return;    
      }
      res.send({"status":"success"});  
  });
};
