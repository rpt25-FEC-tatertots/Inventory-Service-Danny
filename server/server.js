const express = require('express');
const axios = require('axios');
const db = require('../database/index.js');

const App = express();
const Port = 6004;
App.use(express.static('./public/dist'));
App.use(express.urlencoded({ extended: true }));
App.use(express.json({}));

App.get('/inventory/:productID', (req, res) => {
  db.findOne(req.params.productID)
    .then((items) => {
      if (!items[0]) {
        res.sendStatus(404);
      } else {
        const response = {
          productID: items[0].productID,
          colors: {},
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
  let info = {};
  // axios.get(`localhost:6003/photos/${req.params.productID}`)
  //   .then((response) => {
  //     info = response.data;
  //   });
  db.findOne(req.params.productID)
    .then((items) => {
      if (!items[0]) {
        res.sendStatus(404);
      } else {
        // eslint-disable-next-line prefer-destructuring
        info.items = items[0];
        res.send(info);
      }
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});
App.post('/product/:productID', (req, res) => {
  db.updateOrCreate(req.params.productID, req.body)
    .then(res.sendStatus(200))
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

module.exports = App.listen(Port, () => {
  console.log(`App is listening on port ${Port}`);
});
