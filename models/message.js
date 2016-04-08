var Msg = require('./Msg.js');

exports.Add = function(req,res){
		console.log(req.body);
		var json = req.body;

		Msg.save(json, function(err){
			if(err){
				res.send({'success':false,'err':err});
			}else{
				res.send({'success':true});
			}
		});
};

exports.messageJSON = function(req,res)
{
	Message.find({},function(err,obj){
		res.send(obj);
	});
	console.log(res.body);
};