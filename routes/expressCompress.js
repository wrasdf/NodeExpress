var fs = require('fs');
var fsExtra = require('fs-extra');
var compressor = require('node-minify');




fsExtra.remove('../../public',function(err){

	if(err){
		console.log("remove files error.")
	}else{
		console.log("remove success.")
		// fsExtra.copy(__dirname+'/developmentPublic',__dirname+'/public',function(err){
		// 	if(err){
		// 		console.log(err,"copy error");
		// 	}else{
		// 		console.log("test");
		// 		fs.readdir(__dirname+'/public/js',function(err,files){
		// 		    if(err) throw err;
		// 		    files.forEach(function(file){
		// 		    	console.log(file);
		// 		    	if(/.js$/i.test(file)){
		// 		    		new compressor.minify({
		// 		    			type : "yui-js",
		// 		    			fileIn : file,
		// 		    			fileOut : file,
		// 		    			callback : function(err){
		// 		    				console.log(err);
		// 		    			}
		// 		    		})
		// 		    	}
		// 		    });
		// 		 });

		// 		fs.readdir(__dirname+'/public/css',function(err,files){
		// 		    if(err) throw err;
		// 		    files.forEach(function(file){
		// 		    	if(/.css$/i.test(file)){
		// 		    		new compressor.minify({
		// 		    			type : "yui-css",
		// 		    			fileIn : file,
		// 		    			fileOut : file,
		// 		    			callback : function(err){
		// 		    				console.log(err);
		// 		    			}
		// 		    		})
		// 		    	}
		// 		    });
		//  		});
		// 	}

		// });


	}
})


