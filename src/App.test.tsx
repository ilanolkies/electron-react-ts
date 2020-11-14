import React from 'react'
import { render } from 'enzyme'
import { App } from './App'

describe('App', () => {
  test('renders the title', () => {
    const wrapper = render(<App />)
    expect(wrapper.text()).toContain('Electron + React.js + Typescript')
  })
})
