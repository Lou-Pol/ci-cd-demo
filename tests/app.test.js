const request = require('supertest');
const app = require('../index');

describe('API Tests', () => {

  test('GET /health should return status ok', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe("ok");
  });
   test('GET /add should return correct sum', async () => {
    const res = await request(app).get('/add?a=2&b=3');
    expect(res.body.result).toBe(5);
  });

});