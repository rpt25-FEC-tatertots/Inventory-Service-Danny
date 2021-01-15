const express = require('express')
const App = express()
const Port = 6004
App.use(express.static('./public/dist'))

App.listen(Port, ()=> {
  console.log(`App is listening on port ${Port}`)
})
