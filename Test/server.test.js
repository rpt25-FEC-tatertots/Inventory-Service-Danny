process.env.PORT = 8080;
const response = require('supertest');
const app = require('../server/server.js');

jest.mock('../database/index.js');

const db = require('../database/index.js');
const MockData = require('./MockData.js');

db.findOne.mockResolvedValue([MockData[2]]);

describe('/inventory:productID', () => {
  it('should return a 200 status code', async (done) => {
    const res = await response(app).get('/inventory/3');
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    done();
  });
  it('should return the right productID', async (done) => {
    const res = await response(app).get('/inventory/3');
    expect(JSON.parse(res.text).productID).toBe(3);
    done();
  });
});
describe('/product:productID', () => {
  it('should return a 200 status code', async (done) => {
    const res = await response(app).get('/product/3');
    expect(res.status).toBe(200);
    done();
  });
  it('should return the correct product information', async (done) => {
    const res = await response(app).get('/product/3');
    expect(JSON.parse(res.text).items.productID).toBe(3);
    done();
  });
});
