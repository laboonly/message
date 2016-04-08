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

MessageDAO.prototype.findByName = function(){
	Message.find(function(err,msg){
		return {
			name: msg.name,
			message: msg.message,
		};
	});
};

module.exports = new MessageDAO;