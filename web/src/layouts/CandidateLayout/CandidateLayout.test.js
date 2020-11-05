import { render } from '@redwoodjs/testing'

import CandidateLayout from './CandidateLayout'

describe('CandidateLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CandidateLayout />)
    }).not.toThrow()
  })
})
