const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/FEC', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to FEC'))
  .catch((err) => console.log(err));

const inventorySchema = mongoose.Schema({
  productID: Number,
  price: Number,
  colors: [{
    colorName: String,
    colorAbbreviation: String,
    hexCode: String,
    inventory: [{
      size: String,
      quantity: Number,
      discount: Number,
    }],
  }],
});

const InventoryModel = mongoose.model('Inventory', inventorySchema);

const add = (inventoryData) => InventoryModel.create(inventoryData);
const findOne = (productID) => InventoryModel.find({ productID });

module.exports.add = add;
module.exports.findOne = findOne;
