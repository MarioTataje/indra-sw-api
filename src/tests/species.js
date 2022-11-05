const request = require("supertest");

const server = request.agent("http://localhost:4040/api/species");

describe('Species Operations', function() {
    it('should retrieve all species', function(done) {
        server.get('/').set('Content-Type', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
    it('should save a specie', function(done) {
        server.post('/').set('Content-Type', 'application/json')
            .send({ "nombre": "Rodian", "clasificacion": "sentient", "designacion": "reptilian",
                "color_piel": "green, blue", "color_cabello": "n/a", "color_ojos": "black", "tiempo_vida": "unknown",
                "lenguaje": "Galatic Basic"})
            .expect('Content-Type', /json/)
            .expect(201,done);
    });
    it('should not sava a specie', function(done) {
        server.post('/').set('Content-Type', 'application/json')
            .send({ "nombre": "Rodian", "clasificacion": "sentient", "designacion": "reptilian",
                "color_piel": "green, blue", "color_cabello": "n/a", "color_ojos": "black", "tiempo_vida": "unknown",
                "lenguaje": ""})
            .expect('Content-Type', /json/)
            .expect(400,done);
    });
});
