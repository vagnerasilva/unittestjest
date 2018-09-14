const request = require('supertest');
const app = require ('./app' )

describe('PRIMEIRO TESTE ', () => {
    test('Teste de request comum', (done) => {

        request(app).get('/').then((response) => {
                expect(
                         response.statusCode
                      )
                    .toBe(200);
             done();
        });
        
    });



});

describe('SEGUNDO TESTE ', () => {
    test('Teste usando promessa', (done) => {
        return request(app).get("/")
                    .then(response => {
                        expect(
                            response.statusCode
                        )
                        .toBe(200);
                        done();
        })
    });
})

describe('TERCEIRO TESTE ', () => {
    test('Teste usando o async', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
    });
})