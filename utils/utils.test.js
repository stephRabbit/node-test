const expect = require('expect')

const utils = require('./utils')

describe('Utils', () => {
  describe('#add', () => {
    it('should add to numbers', () => {
      const res = utils.add(5, 5)
      expect(res).toBe(10).toBeA('number')
    })

    it('should add to number async', done => {
      utils.asyncAdd(5, 5, sum => {
        expect(sum).toBe(10).toBeA('number')
        done()
      })
    })
  })


  it('should square a number', () => {
    const res = utils.square(5)
    expect(res).toBe(25).toBeA('number')
  })

  it('should square a number async', done => {
    utils.asyncSquare(5, squared => {
      expect(squared).toBe(25).toBeA('number')
      done()
    })
  })

  it('should verify first and lastname', () => {
    const user = { loaction: 'Montreal', age: 4 }
    const res = utils.setName(user, 'Gizmo Jones')
    expect(res).toInclude({
      firstName: 'Gizmo',
      lastName: 'Jones'
    })
  })
})


// it('should expect some values', () => {
//   expect(12).toNotBe(11)
//   expect({name: 'Gizmo'}).toEqual({name: 'Gizmo'})
//   expect({name: 'gizmo'}).toNotEqual({name: 'Gizmo'})
//   expect([2,3,4]).toInclude(5)
//   expect([2,3,4]).toInclude(2)
//   expect([2,3,4]).toExclude(2)
//   expect([2,3,4]).toExclude(1)
//   expect({
//     name: 'Gizmo',
//     age: 25,
//     location: 'Montreal'
//   }).toInclude({
//     age: 23
//   })
//   expect({
//     name: 'Gizmo',
//     age: 25,
//     location: 'Montreal'
//   }).toExclude({
//     age: 23
//   })
// })