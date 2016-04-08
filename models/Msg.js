var mongodb = require('./mongodb');

var Schema=mongodb.mongoose.Schema;

var MessageSchema = new Schema({
	message: String,
	name: String
});

var Message = mongodb.mongoose.model('Message', MessageSchema); 

var MessageDAO = function(){};

MessageDAO.prototype.save = function(obj,callback) {
	var msg = new Message(obj);
	msg.save(function(err){
		callback(err);
	});
};

MessageDAO.prototype.findByName = function(name, callback){
	Message.find({}, function(err,obj){
		callback(err,obj);
	});
};

module.exports = new MessageDAO;