const fs = require('fs')
const path = require('path')
const providers = {}

fs
  .readdirSync(__dirname)
  .filter((file) =>
    file !== 'index.js' && file !== 'NotificationBase.js'
  )
  .forEach((file) => {
	const provider = require(path.join(__dirname, file))
	if (provider.name){
		providers[provider.name] = provider
	}
  })


module.exports = {providers}