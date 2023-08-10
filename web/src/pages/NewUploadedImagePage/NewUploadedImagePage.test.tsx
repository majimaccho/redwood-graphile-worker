import { render } from '@redwoodjs/testing/web'

import NewUploadedImagePage from './NewUploadedImagePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('NewUploadedImagePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NewUploadedImagePage />)
    }).not.toThrow()
  })
})
