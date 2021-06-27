const Courses = require('../src/data/courses.json')

describe("Testing data", () => {
  let courses = Courses

  it("we have an array of 12 courses", () => {
    expect(courses.length).toBe(12)
  })

  it("expect the first item category contain react", () => {
    expect(courses[0].category).toMatch('react')
  })

  it("expect the category to be defined", () => {
    courses.map((item) => (
      expect(item.category).toBeDefined()
    ))
  })

  it("test the each course to have a link", () => {
    courses.map((item) => (
      expect(item.link).toBeTruthy()
    ))
  })
})
