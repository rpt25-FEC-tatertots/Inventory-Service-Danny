const mongoose = require('mongoose')
const app = require('./server.js')
const response = require('supertest')

afterAll(async done => {
  await mongoose.connection.close()
  await app.close()
  done()
})
describe('/inventory:productID', () => {
  it('should return a 200 status code', async done => {
    const res = await response(app).get('/inventory/56')
    expect(res).toBeDefined()
    expect(res.status).toBe(200)
    done()
  })
  it('should return the right productID', async done => {
    const res = await response(app).get('/inventory/56')
    expect(JSON.parse(res.text)['productID']).toBe(56)
    done()
  })
})