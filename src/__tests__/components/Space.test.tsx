import { render } from '@testing-library/react'
import { Space } from '../../components/Space'

test('Button renders correctly', () => {
  expect(render(<Space />)).toMatchSnapshot()
})
