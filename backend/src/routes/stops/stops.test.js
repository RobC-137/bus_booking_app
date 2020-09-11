const supertest = require('supertest');
const app = require('../../../index');

describe('GET /api/v1/stops', () => {
    it('should respond with an array of stops', async () => {
        const response = await supertest(app)
            .get('/api/v1/stops')
            .expect('Content-Type', /json/)
            .expect(200);

        expect(response.body).toBeInstanceOf(Array);

    });
});

