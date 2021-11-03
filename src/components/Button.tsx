import styled from '@emotion/styled'

type Props = Partial<{ bgColor: string }>
export const Button = styled.button<Props>`
  background-color: ${({ bgColor }) => bgColor || 'red'};
  padding: 10px 32px;
  &:hover {
    background-color: royalblue;
  }
  border-radius: 16px;
  border: none;
`
