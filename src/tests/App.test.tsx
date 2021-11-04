import App from '../App'
import { render } from '@testing-library/react'

test('Navigation between pages', async () => {
  const app = render(<App />)

  expect(app.getByText('Landing page')).toBeInTheDocument()
})
