const request = require('supertest');
const expect = require('expect');

var app = require('./server.js').app;

describe('Server', () => {

  describe('Get /', () => {
    it('should return hello world response', (done) => {
      request(app)
        .get('/')
        .expect(404)                  //status code
        .expect((res) => {
          expect(res.body).toInclude({
            error: 'Page not found.'
          });
        })       //body information
        .end(done);
    });
  });

  describe('Get /users', () => {
    it('should return my user object', (done) => {
      request(app)
        .get('/users')
        .expect(200)
        .expect((res) => {
          expect(res.body).toInclude({
            name: 'Judy',
            age: 18
          });
        })
        .end(done);
    });
  });

});
