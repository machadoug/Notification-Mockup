// const providers = require('../providers')
const {User, Category, History} = require('../models')
const {providers}	= require('../providers')

module.exports = {
  async send (req, res) {
	try {
		const users = await User.findAll({
			include: {
				model: Category,
				where: {
					id: req.body.category
				}
			}
		})
	
		let count = 0
		let countUsers = 0
		let flag = false
	
		users.forEach(user => {
			flag = false;
			user.channels.split(',').forEach(channel => {
				if (providers[channel.trim()]){
					providers[channel.trim()].send(req.body.message, user.id, req.body.category)
					count++
					flag = true
				}
			})
	
			if (flag){
				countUsers++
			}
		});
	
		// console.log(providers)
		res.status(200).send({
			message: ` ${count} notifications sent to ${countUsers} users`,
		})
		
    } catch (err) {
		console.log(err)
		res.status(400).send({
		error: 'Error sending the notifications'
		})
    }
  }, 
  async history (req, res) {
	

	try {
		const history = await History.findAll({
			offset: req.query.offset || 0, 
			limit: req.query.limit || 50,
			order: [
				[req.query.orderBy || 'createdAt', req.query.orderDir || 'DESC'],
			],
			include: [{
				model: Category,
				attributes: ['name']
			},
			{
				model: User,
				attributes: ['name']
			}]
		});

		const total = await History.count();
	
		res.status(200).send({
			list: history,
			total: total
		})
    } catch (err) {
		console.log(err)
		res.status(400).send({
		error: 'Error sending the notifications'
		})
    }
  }
}