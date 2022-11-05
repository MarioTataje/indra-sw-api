const request = require("supertest");

const server = request.agent("http://localhost:4040/api/swapi/");

describe('Swapi Operations', function() {
    it('should retrieve all planets from swapi', function(done) {
        server.get('planets/').set('Content-Type', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
    it('should retrieve all species from swapi', function(done) {
        server.get('species/').set('Content-Type', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
    it('should retrieve all starships from swapi', function(done) {
        server.get('starships/').set('Content-Type', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
    it('should retrieve all vehicles from swapi', function(done) {
        server.get('vehicles/').set('Content-Type', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});
