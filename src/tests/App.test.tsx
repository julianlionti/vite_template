import App from '../App'
import { render, fireEvent } from '@testing-library/react'

test('Changing button color with input', async () => {
  const app = render(<App />)

  const input = app.queryByLabelText('colorInput') as HTMLInputElement
  fireEvent.change(input, { target: { value: 'blue' } })
  expect(input.value).toBe('blue')

  const changeColorBtn = app.queryByLabelText('changeColorBtn')
  changeColorBtn!!.click()

  const colorBtn = app.queryByLabelText('colorBtn')
  expect(colorBtn).toHaveStyle({ backgroundColor: 'blue' })

  fireEvent.change(input, { target: { value: 'lightblue' } })
  changeColorBtn!!.click()
  expect(colorBtn).toHaveStyle({ backgroundColor: 'lightblue' })

  fireEvent.change(input, { target: { value: 'white' } })
  fireEvent.keyPress(input, { key: 'Enter', code: 'Enter', charCode: 13 })

  expect(colorBtn).toHaveStyle({ backgroundColor: 'white' })
})
