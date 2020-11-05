import { render } from '@redwoodjs/testing'

import CandidatePage from './CandidatePage'

describe('CandidatePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CandidatePage />)
    }).not.toThrow()
  })
})
