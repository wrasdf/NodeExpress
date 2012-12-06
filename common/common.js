
var Common = (function(){

	function guid() {
	    function S4() {
	       return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
	    }
	    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
	}

	return {
		guid : guid
	}

})();

module.exports = {
	Common : Common
};