import { render } from '@redwoodjs/testing'

import FormPage from './FormPage'

describe('FormPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FormPage />)
    }).not.toThrow()
  })
})
