const request = require("supertest");

const server = request.agent("http://localhost:4040/api/vehicles");

describe('Vehicle Operations', function() {
    it('should retrieve all vehicles', function(done) {
        server.get('/').set('Content-Type', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
    it('should save a vehicle', function(done) {
        server.post('/').set('Content-Type', 'application/json')
            .send({ "nombre": "Storm IV Twin-Pod cloud car", "modelo": "Storm IV Twin-Pod",
                "fabricante": "Bespin Motors", "costo_en_creditos": "75000", "pasajeros": "0",
                "tipo": "repulsorcraft"})
            .expect('Content-Type', /json/)
            .expect(201,done);
    });
    it('should not sava a vehicle', function(done) {
        server.post('/').set('Content-Type', 'application/json')
            .send({ "nombre": "Storm IV Twin-Pod cloud car", "modelo": "Storm IV Twin-Pod",
                "fabricante": "Bespin Motors", "costo_en_creditos": "75000", "pasajeros": "0",
                "tipo": ""})
            .expect('Content-Type', /json/)
            .expect(400,done);
    });
});
