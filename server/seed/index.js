const {
	sequelize,
	Category,
	User,
	UserCategory
	} = require('../src/models')
	
const Promise = require('bluebird')
const categories = require('./categories.json')
const users = require('./users.json')
const userCategories = require('./usercategories.json')

sequelize.sync({force: true})
.then(async function () {

	await Promise.all(
		categories.map(category => {
			Category.create(category)
		})
	)
	await Promise.all(
		users.map(user => {
			User.create(user)
		})
	)
	await Promise.all(
		userCategories.map(uc => {
			UserCategory.create(uc)
		})
	)
})