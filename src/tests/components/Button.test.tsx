import { Button } from '../../components/Button'
import { render } from '@testing-library/react'

test('Button renders correctly', () => {
  expect(render(<Button>Click me!</Button>)).toMatchSnapshot()
})
