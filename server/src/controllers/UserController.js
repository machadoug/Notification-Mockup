const {User, Category} = require('../models')

// const { Op } = require("sequelize");

module.exports = {
  async register (req, res) {

	if (!req.body.category)
	{
		res.status(400).send({
			error: 'A category ID is required.'
		})
		return
	}
	
	
    try {
		const user = await User.create(req.body)

		try {
			const catids = String(req.body.category).split(',').map((x) => { 
				return parseInt(x, 10); 
			});
			const categories = await Category.findAll({
				where: {
					id: catids
				}
			});
			user.addCategories(categories);
			user.categories = categories;
	
			const userJson = user.toJSON()
			res.send({
				user: userJson,
			})
		} catch (e) {
			res.status(400).send({
				error: 'Unable to save Category'
			})
		}

    } catch (e) {
      res.status(400).send({
        error: 'This email account is already in use.'
      })
    }

	
  }
}