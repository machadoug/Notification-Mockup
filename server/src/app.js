const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
// const {sequelize} = require('./models')
// const config = require('./config/config')

const app = express()
app.use(morgan('combined'))
// app.use(bodyParser.json())
app.use(cors())

// require('./passport')

require('./routes')(app)



// sequelize.sync({force: false})
//   .then(() => {
//     app.listen(config.port)
//     console.log(`Server started on port ${config.port}`)
//   })

app.listen(8081)