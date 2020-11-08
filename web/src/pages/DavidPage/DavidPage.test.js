import { render } from '@redwoodjs/testing'

import DavidPage from './DavidPage'

describe('DavidPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DavidPage />)
    }).not.toThrow()
  })
})
