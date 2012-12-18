var fs  = require('fs'); 
var uglifyJS = require("uglify-js"); 

function compressProvider(fileIn, fileOut) {
	var result = uglifyJS.minify(fileIn);
    fs.writeFile(fileOut, result.code, function (err) {
	  if (err) {
	    return console.log(err);
	  }
	});
}

function beautifyProvider(fileIn,fileOut){
	
}


compressProvider([__dirname+'/../public/js/view.js'],__dirname+'/../public/js/view.js');
compressProvider([__dirname+'/../public/js/headerEdit.js'], __dirname+'/../public/js/headerEdit.js');
