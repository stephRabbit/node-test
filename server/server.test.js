const request = require('supertest')
const expect = require('expect')

const { app } = require('./server')

describe('Server', () => {
  describe('GET /', () => {
    it('should return Testing Express! response', done => {
      request(app)
        .get('/')
        .expect(404)
        // .expect({
        //   error: 'Error Message!'
        // })
        .expect(res => {
          expect(res.body).toInclude({
            error: 'Error Message!'
          })
        })
        .end(done)
    })
  })

  describe('GET /users', () => {
    it('should return specific user', done => {
      request(app)
        .get('/users')
        .expect(200)
        .expect(res => {
          expect(res.body).toInclude({
            name: 'Gizmo',
            age: 4
          })
        })
        .end(done)
    })
  })
})