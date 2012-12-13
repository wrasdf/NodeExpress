var $ = require("../common/common.js").$;
var notesModel = require("../persistent/db.js").listModel;


function NoteProvider(){
	this.notesModel = notesModel;
	this.id = 1;
};

NoteProvider.prototype.createNote = function(options,callback) {

	var self = this;
	
	new this.notesModel($.extend({ id : self.id , update_date : Date.now()},options)).save(function(err,data){
		if(err){
			callback(err,data);
		}else{
			callback(null,data);
		}
	});	

	this.id ++;

}

NoteProvider.prototype.deleteNoteByOptions = function(options,callback) {

	this.notesModel.remove(options,function(err,data){
		if(err){
			callback(err,data);
		}else{
			callback(null,data);
		}
	});

};


NoteProvider.prototype.findByOptions = function(options,callback,limitNumbers) {

	if(limitNumbers && limitNumbers > 0){
		this.notesModel.find(options).sort({"update_date": -1}).limit(limitNumbers).find(function(err,data){
			if(err){
				callback(err,data);
			}else{
				callback(null,data);
			}
  		});	
	}else{
		this.notesModel.find(options).sort({"update_date": -1}).find(function(err,data){
			if(err){
				callback(err,data);
			}else{
				callback(null,data);
			}
	  	});	
	}

};

NoteProvider.prototype.updateNotes = function(options,updates,callback) {

	this.notesModel.find(options).sort({"update_date": -1}).find(function(err,data){
		if(err){
			callback(err);
		}else{
			for(var i=0 ; i<data.length; i++){
				$.extend(data[i],updates);
				data[i].save(function(errors){
					if(errors){
						callback(errors);
					}else{
						callback(null);
					}
				});
			}
		}
  	});

};


module.exports = new NoteProvider();
