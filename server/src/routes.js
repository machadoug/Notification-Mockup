const UserController = require('./controllers/UserController')
const CategoryController = require('./controllers/CategoryController')
const NotificationController = require('./controllers/NotificationController')

module.exports = (app) => {
	app.post('/user', UserController.register),
	app.post('/category', CategoryController.create),
	app.get('/category', CategoryController.list),
	app.post('/notification', NotificationController.send)
	app.get('/notification/history', NotificationController.history)
}
