const Mockaroo = require('mockaroo');
const db = require('./database/index.js');
const mockData = require('./Test/MockData.js');

const client = new Mockaroo.Client({
  apiKey: process.env.APIKEY,
});
db.dropCollection();

client.generate({
  count: 97,
  schema: 'FEC-InventoryData',
})
  .then((inventoryData) => db.add(inventoryData))
  .then(console.log('Generated Data insert Complete'));

db.add(mockData).then(console.log('Hard Data Inserted'));
