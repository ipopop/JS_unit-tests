import React from 'react'
import renderer from 'react-test-renderer'
import Grid from './Grid'

it('Grid snapshot test', () => {
  const component = renderer.create(<Grid />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})