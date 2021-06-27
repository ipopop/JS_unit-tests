const Courses = require('../src/data/courses.json')

describe("testing component", () => {
  let courses = Courses

  it('expect each course to have a number ID', () => {
    courses.map((item) => (
      // eslint-disable-next-line no-undef
      expect(item.id).toEqual(jasmine.any(Number))
    ))
  })
})