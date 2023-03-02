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
		res.status(400).send({
			message: ` ${count} notifications sent to ${countUsers} users`,
			users: users,
			data: req.body
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
			offset: req.body.offset || 0, 
			limit: req.body.limit || 50,
			order: [
				['createdAt', 'DESC'],
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
	
		res.status(400).send({
			history: history
		})
    } catch (err) {
		console.log(err)
		res.status(400).send({
		error: 'Error sending the notifications'
		})
    }
  }
}