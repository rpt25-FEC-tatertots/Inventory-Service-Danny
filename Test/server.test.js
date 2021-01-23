const mongoose = require('mongoose');
const response = require('supertest');
const app = require('../server/server.js');

afterAll(async (done) => {
  await mongoose.connection.close();
  await app.close();
  done();
});
describe('/inventory:productID', () => {
  it('should return a 200 status code', async (done) => {
    const res = await response(app).get('/inventory/56');
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    done();
  });
  it('should return the right productID', async (done) => {
    const res = await response(app).get('/inventory/56');
    expect(JSON.parse(res.text).productID).toBe(56);
    done();
  });
});
describe('/product:productID', () => {
  it('should return a 200 status code', async (done) => {
    const res = await response(app).get('/product/56');
    expect(res.status).toBe(200);
    done();
  });
  it('should return the correct product information', async () => {
    const res = await response(app).get('/product/56');
    expect(JSON.parse(res.text).items.productID).toBe(56);
  });
  it('should have an error for products that dont exist', async () => {
    const res = await response(app).get('/product/156');
    expect(res.status).toBe(404);
  });
});
