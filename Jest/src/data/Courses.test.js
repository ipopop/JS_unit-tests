import courses from './courses'

test('expect o have 12 courses in the list', () => {
  expect(courses.length).toBe(12)
})

test('each course should have a number ID', () => {
  // eslint-disable-next-line array-callback-return
  courses.map((item) => {
    expect(typeof item.id).toBe('number')
  })
})