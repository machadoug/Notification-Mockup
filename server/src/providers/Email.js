const {ProviderBase} = require('../providers/ProviderBase')

class Email extends ProviderBase{
	constructor(){
		super()
		this.label = 'E-mail'
		this.name = 'email'
	}
}

module.exports = new Email()
