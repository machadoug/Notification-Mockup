const UserController = require('./controllers/UserController')
const CategoryController = require('./controllers/CategoryController')
const NotificationController = require('./controllers/NotificationController')

module.exports = (app) => {
	app.post('/user/new', UserController.register),
	app.post('/category/new', CategoryController.create),
	app.post('/notification/send', NotificationController.send)
	app.get('/notification/history', NotificationController.history)
}
