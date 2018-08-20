const expect = require('expect')
const rewire = require('rewire')

const app = rewire('./app.js')
// app.__get__
// app.__set__

describe('App', () => {
  const db = {
    saveUser: expect.createSpy()
  }

  app.__set__('db', db)

  it('should call the spy correctlty', () => {
    const spy = expect.createSpy()
    spy('Gizmo', 4)
    expect(spy)
      .toHaveBeenCalled()
      .toHaveBeenCalledWith('Gizmo', 4)
  })

  it('should call saveUser with user object', () => {
    const email = 'email@email.em'
    const password = 'gizmo'

    app.handleSignup(email, password)
    expect(db.saveUser)
      .toHaveBeenCalled()
      .toHaveBeenCalledWith({ email, password })
  })
})