const mongoose = require('mongoose');

if (process.env.NODE_ENV !== 'test') {
  mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to FEC'))
    .catch((err) => console.log(err));
}
const inventorySchema = mongoose.Schema({
  productID: Number,
  price: Number,
  colors: [{
    colorName: String,
    colorAbbreviation: String,
    discount: Number,
    hexCode: String,
    inventory: [{
      size: String,
      quantity: Number,
    }],
  }],
});

const InventoryModel = mongoose.model('Inventory', inventorySchema);

const add = (inventoryData) => InventoryModel.create(inventoryData);
const findOne = (productID) => InventoryModel.find({ productID });
const updateOrCreate = (productID, data) => {
  InventoryModel.updateOne({ productID }, { $set: data }, { upsert: true });
};
const dropCollection = () => InventoryModel.collection.drop();
module.exports.add = add;
module.exports.findOne = findOne;
module.exports.updateOrCreate = updateOrCreate;
module.exports.dropCollection = dropCollection;
