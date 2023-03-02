const {History} = require('../models')
class ProviderBase {
	static name;
	static label;
	constructor(){

	}
	send(message, userId, categoryId){
		/**
		 * Logic to send Notification
		 */
		this.addHistory(message, userId, categoryId);
	}
	async addHistory(message, userId, categoryId){
		try {
			const history = await History.create({
				message:	message, 
				UserId:		userId,
				CategoryId:	categoryId,
				channel:	this.name
			})
			const json = history.toJSON()
			
			return {
				success:	true,
				data: json,
			}
		} catch (err) {
			return {
				error: err
			}
		}
	}
}

module.exports =  {
	ProviderBase
}