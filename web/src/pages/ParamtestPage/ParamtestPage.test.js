import { render } from '@redwoodjs/testing'

import ParamtestPage from './ParamtestPage'

describe('ParamtestPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ParamtestPage />)
    }).not.toThrow()
  })
})
