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
  }
}