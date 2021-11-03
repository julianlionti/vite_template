import styled from '@emotion/styled'
import { ChangeEvent, useState } from 'react'
import { Button } from './components/Button'
import { Space } from './components/Space'

const HorizontalDiv = styled.div`
  display: flex;
`

const App = () => {
  const [colorInput, setColorInput] = useState('')
  const [color, setColor] = useState('')

  const handleClick = () => setColor(colorInput)
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) =>
    setColorInput(event.target.value)

  return (
    <div>
      <p>First Vite App</p>
      <p>Styled no props button:</p>
      <HorizontalDiv>
        <input
          aria-label="colorInput"
          value={colorInput}
          onChange={handleInputChange}
          placeholder="color name or hexa"
        />
        <Space />
        <Button aria-label="changeColorBtn" onClick={handleClick}>
          Change Color
        </Button>
      </HorizontalDiv>
      <p>Styled Button:</p>
      <Button aria-label="colorBtn" bgColor={color}>
        Click me
      </Button>
    </div>
  )
}

export default App
