const express = require("express")
const scores = require('./scores')

const app = express()

app.set("view engine", "pug")

app.use(express.static("public"))

app.get('/', (request, response) => {
    response.render('index', {scores})
})

app.all('*', (request, response) => {
  return response.sendStatus(404)
})

app.listen(8182, () => {
    console.log('Listening on 8182...')
})
