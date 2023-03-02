const {ProviderBase} = require('../providers/ProviderBase')

class Sms extends ProviderBase{
	constructor(){
		super()
		this.label = 'SMS'
		this.name = 'sms'
	}
}

module.exports = new Sms()
