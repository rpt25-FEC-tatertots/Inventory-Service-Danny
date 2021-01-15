const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/FEC', {useNewUrlParser: true, useUnifiedTopology: true})
  .then(()=>console.log('Connected to FEC'))
  .catch((err)=> console.log(err))

let inventorySchema = mongoose.Schema({
  "productID": Number,
  "price": Number,
  "colors": [{
    "colorName": String,
    "colorAbbreviation": String,
    "hexCode": String,
    "inventory": [{
      "size": String,
      "quantity": Number,
      "discount": Number}]
    }]
  })

let InventoryModel= mongoose.model('Inventory', inventorySchema)

const add = (inventoryData) => {
  return InventoryModel.create(inventoryData)
}
const findOne = (productID) => {
  return new Promise((resolve, reject) => {
    InventoryModel.find({ productID: productID }, (err, document) => {
      if (err) { reject(err) }
      resolve(document);
    })
  })
}
module.exports.add = add;
module.exports.findOne = findOne;
