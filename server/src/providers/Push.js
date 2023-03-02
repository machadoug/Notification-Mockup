const {ProviderBase} = require('../providers/ProviderBase')

class Push extends ProviderBase{

	constructor(){
		super()
		this.label = 'Push Notification'
		this.name = 'push'
	}
}

module.exports = new Push()
