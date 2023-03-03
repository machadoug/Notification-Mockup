const {Category} = require('../models')


module.exports = {
  async create (req, res) {
    try {
      const category = await Category.create(req.body)
      const json = category.toJSON()
      res.send({
        category: json,
      })
    } catch (err) {
		// console.log(err)
      res.status(400).send({
        error: 'Category already exists'
      })
    }
  },
  async list (req, res) {
    try {
		const list = await Category.findAll({
			offset: req.query.offset || 0, 
			limit: req.query.limit || 1000,
			order: [
				[req.query.orderBy || 'name', req.query.orderDir || 'ASC'],
			],
			attributes: [
				['id', 'value'],
				['name', 'title']
			]
		});

		const total = await Category.count();
	
		res.status(200).send({
			list: list,
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