import { render } from '@redwoodjs/testing'

import CanddescLayout from './CanddescLayout'

describe('CanddescLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CanddescLayout />)
    }).not.toThrow()
  })
})
