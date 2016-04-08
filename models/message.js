var Msg = require('./Msg.js');
var mongodb = require('./mongodb');

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
	

	Msg.findall(function(err,obj){
		console.log(obj);
		res.render('home',{
			obj: obj
		});
	});

};