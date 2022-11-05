const request = require("supertest");

const server = request.agent("http://localhost:4040/api/planets");

describe('Planet Operations', function() {
    it('should retrieve all planets', function(done) {
        server.get('/').set('Content-Type', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
    it('should save a planet', function(done) {
        server.post('/').set('Content-Type', 'application/json')
            .send({ "nombre": "Hoth", "periodo_rotacion": "23", "periodo_orbital": "549", "clima": "frozen",
                "gravedad": "1.1 standard", "terreno": "tundra, ice caves, mountain ranges", "poblacion": "unknown"})
            .expect('Content-Type', /json/)
            .expect(201,done);
    });
    it('should not sava a planet', function(done) {
        server.post('/').set('Content-Type', 'application/json')
            .send({ "nombre": "Hoth", "periodo_rotacion": "23", "periodo_orbital": "549", "clima": "frozen",
                "gravedad": "1.1 standard", "terreno": "tundra, ice caves, mountain ranges", "poblacion": ""})
            .expect('Content-Type', /json/)
            .expect(400,done);
    });
});
