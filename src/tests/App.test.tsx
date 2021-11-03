import App from '../App'
import { render, fireEvent } from '@testing-library/react'

test('loads and displays greeting', async () => {
  const app = render(<App />)

  const input = app.queryByLabelText('colorInput') as HTMLInputElement
  fireEvent.change(input, { target: { value: 'blue' } })
  expect(input.value).toBe('blue')

  const changeColorBtn = app.queryByLabelText('changeColorBtn')
  changeColorBtn!!.click()

  const colorBtn = app.queryByLabelText('colorBtn')
  expect(colorBtn).toHaveStyle({
    backgroundColor: 'blue',
  })
})
