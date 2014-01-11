var url = require('url');
exports.add = function(req, res){
  var urlMembers = url.parse(req.url,true);
  var query = urlMembers.query;
  console.log(query);
  res.end( query['number']/1+1+"" );
};