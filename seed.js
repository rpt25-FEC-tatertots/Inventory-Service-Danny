const Mockaroo = require('mockaroo')
const db = require('./database/index.js')
const client = new Mockaroo.Client({
  apiKey: process.env.APIKEY
})

client.generate({
  count: 100,
  schema: 'FEC-InventoryData'
})
  .then(inventoryData => db.add(inventoryData))
  .then(console.log('Data insert Complete'))