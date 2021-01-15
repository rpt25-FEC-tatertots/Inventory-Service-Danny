const express = require('express')
const db = require('../database/index.js')
const bodyParser = require('body-parser')
const App = express()
const Port = 6004
App.use(express.static('./public/dist'))
App.use(express.urlencoded({extended: true}))

App.get('/inventory/:productID', (req, res) => {

  db.findOne(req.params.productID)
    .then(items => {
      var response = {
        productID: items[0].productID,
        colors: {}
      }
      items[0].colors.forEach(color => response.colors[color.colorName] = color.hexCode)
      res.send(response)
    })
    .catch(err => console.log(err))
})

App.listen(Port, ()=> {
  console.log(`App is listening on port ${Port}`)
})
