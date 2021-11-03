import styled from '@emotion/styled'
import React from 'react'

type Props = Partial<{ isVert: boolean }>
export const Space = styled.div<Props>`
  margin: ${({ isVert }) => `${isVert ? 10 : 0}px ${isVert ? 0 : 10}px`};
`
