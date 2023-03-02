
module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define('User',{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true
		},
		phone: {
			type: DataTypes.STRING,
			allowNull: true
		},
		channels: {
			type: DataTypes.STRING,
			allowNull: false
		}

	})

	User.associate = function (models) {
		User.belongsToMany(models.Category, { through: 'UserCategory' })
		models.Category.belongsToMany(User, { through: 'UserCategory' })
	}


	return User
}
