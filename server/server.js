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
      if(!items[0]) {
        res.sendStatus(404)
      } else {
      var response = {
        productID: items[0].productID,
        colors: {}
      }
      items[0].colors.forEach(color => response.colors[color.colorName] = color.hexCode);
      res.send(response);
    }})
    .catch(err => {
      console.log(err);
      res.sendStatus(500)
    })
})
App.get('/product/:productID', (req, res) => {
  db.findOne(req.params.productID)
    .then(items => {
      if (!items[0]) {
        console.log(items)
        res.sendStatus(404)
      } else {
        res.send(items[0])
      }
    })
    .catch(err => {
      console.log(err)
      res.sendStatus(500)
    })
})

var server = App.listen(Port, ()=> {
  console.log(`App is listening on port ${Port}`)
})

module.exports = server

