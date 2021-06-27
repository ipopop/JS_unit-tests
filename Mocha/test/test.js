const { expect, assert } = require('chai')
const courses = require('../src/data/courses.json')

describe ('Test data', () => {
  it('each course should contain a number ID', () => {
    // eslint-disable-next-line array-callback-return
    courses.map((item) => {
      assert.typeOf(item.id, 'number')
    })
  })

  it('courses must have 12 items', () => {
    expect(courses).to.have.lengthOf(12)
  })

  it('courses category should be a string', () => {
    // eslint-disable-next-line array-callback-return
    courses.map((item) => {
      assert.typeOf(item.category, 'string')
    })
  })
})