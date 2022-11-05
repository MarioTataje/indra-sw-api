const request = require("supertest");

const server = request.agent("http://localhost:4040/api/starships");

describe('Starship Operations', function() {
    it('should retrieve all starships', function(done) {
        server.get('/').set('Content-Type', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
    it('should save a starship', function(done) {
        server.post('/').set('Content-Type', 'application/json')
            .send({"nombre": "TIE Advanced x1", "modelo": "Twin Ion Engine Advanced x1",
                "fabricante": "Sienar Fleet Systems", "maxima_velocidad": "1200", "equipo": "1", "pasajeros": "0",
                "puntaje_hiper_motor": "1.0", "tipo": "Starfighter"})
            .expect('Content-Type', /json/)
            .expect(201,done);
    });
    it('should not sava a starship', function(done) {
        server.post('/').set('Content-Type', 'application/json')
            .send({"nombre": "TIE Advanced x1", "modelo": "Twin Ion Engine Advanced x1",
                "fabricante": "Sienar Fleet Systems", "maxima_velocidad": "1200", "equipo": "1", "pasajeros": "0",
                "puntaje_hiper_motor": "1.0", "tipo": ""})
            .expect('Content-Type', /json/)
            .expect(400,done);
    });
});
