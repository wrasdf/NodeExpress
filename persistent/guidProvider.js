var guidModel = require("../persistent/db.js").guidMap;

function GuidProvider(){
	this.guidDB = guidModel;
} 

GuidProvider.prototype.getLatestNoteId = function(callback){

	var self = this;

	this.guidDB.where('noteId').ne(null).findOne(function(err,data){

		if(err){
			callback(err,data);
		}else{

			if(data == null){
				new self.guidDB({noteId:100}).save(function(err,data){
					if(err){
						callback(err,data);
					}else{
						callback(null,data);
					}
				});	
			}else{
				callback(null,data);	
			}
			
		}
	});
}


GuidProvider.prototype.increaseNoteId = function(callback){
	this.guidDB.find().where('noteId').ne(null).findOne(function(err,data){
		if(err){
			callback(err,data);
		}else{
			data.noteId ++;
			data.save(function(error){
				if(error){
					callback(error,data);
				}else{
					callback(null,data);
				}
			});
		}
	});

}

module.exports = new GuidProvider();
