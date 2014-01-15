var fileSystem = require('fs');
var viewPath = "./views";
var fileArray = fileSystem.readdirSync(viewPath);


function isViewRoute(url,cb){
	for (var i in fileArray){
		if (url.substring(url.lastIndexOf('/')+1,url.length) == fileArray[i].replace(/\..*/,'')) {
			cb(fileArray[i]);
		}
	}
};

exports.viewRoutes = function(req, res, next) {
	isViewRoute(req.url,function(file) {
		res.render(file);
	});
};


