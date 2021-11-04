import styled from '@emotion/styled'
import { ChangeEvent, KeyboardEvent, useCallback, useState } from 'react'
import { Button } from '../components/Button'
import { Space } from '../components/Space'

const HorizontalDiv = styled.div`
  display: flex;
`

const EmotionPage = () => {
  const [colorInput, setColorInput] = useState('')
  const [color, setColor] = useState('')

  const handleClick = useCallback(() => setColor(colorInput), [colorInput])

  const handleInputChange = (ev: ChangeEvent<HTMLInputElement>) =>
    setColorInput(ev.target.value)

  const handleKeyPress = useCallback(
    (ev: KeyboardEvent<HTMLInputElement>) => {
      if (ev.key === 'Enter') {
        handleClick()
      }
    },
    [handleClick]
  )

  return (
    <div>
      <p>First Vite App</p>
      <p>Styled no props button:</p>
      <HorizontalDiv>
        <input
          aria-label="colorInput"
          value={colorInput}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
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
      <p>
        Template for Vite, Jest, Eslint, Prettier, Emotion, Typescript and React
      </p>
    </div>
  )
}

export default EmotionPage
