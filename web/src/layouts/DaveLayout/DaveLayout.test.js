import { render } from '@redwoodjs/testing'

import DaveLayout from './DaveLayout'

describe('DaveLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DaveLayout />)
    }).not.toThrow()
  })
})
