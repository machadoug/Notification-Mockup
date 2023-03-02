
module.exports = (sequelize, DataTypes) => {
	const History = sequelize.define('History',{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		message: {
			type: DataTypes.STRING,
			allowNull: false
		},
		channel: {
			type: DataTypes.STRING,
			allowNull: false
		}

	})

	History.associate = function (models) {
		History.belongsTo(models.User)
		History.belongsTo(models.Category)
	}

	
	return History
}
