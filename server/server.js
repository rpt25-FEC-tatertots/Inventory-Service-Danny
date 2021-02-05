const axios = require('axios');
const express = require('express');
const db = require('../database/index.js');
const cors = require('cors');

const App = express();

App.use(cors());
App.use(express.static('./public/dist'));
App.use('/:productId', express.static('./public/dist'));
App.get('/inventory/:productID', (req, res) => {
  db.findOne(req.params.productID)
    .then((items) => {
      if (!items[0]) {
        res.sendStatus(404);
      } else {
        const response = {
          productID: items[0].productID,
          colors: {},
          price: items[0].price,
        };
        items[0].colors.forEach((color) => {
          response.colors[color.colorName] = color.hexCode;
        });
        res.send(response);
      }
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});
App.get('/product/:productID', (req, res) => {
  db.findOne(req.params.productID)
    .then((items) => {
      if (!items[0]) {
        res.sendStatus(404);
      } else {
        // console.log(items[0]);
        // const item = items[0];
        // axios.get(`http://localhost:5003/images/thumbnailImages/${req.params.productID}`)
        //   .then((res) => {
        //     res.data.thumbnailImages.forEach((url, i) => item.colors[i].thumbnail = url);
        //   });
        res.send(items[0]);
      }
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

module.exports = App;
