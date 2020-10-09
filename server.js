const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

let routes = require('./routers/routerApp')
routes(app)


app.listen(port, () => console.log(`Example app listening on port port!`))