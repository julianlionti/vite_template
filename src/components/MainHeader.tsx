import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import Separator from './Separator'

const HorizontalNav = styled.nav`
  display: flex;
  justify-content: center;

  li {
    display: inline;
    padding: 0px 16px;
  }
`

const MainHeader = () => {
  return (
    <>
      <HorizontalNav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/emotion">Emotion Example</Link>
          </li>
          <li>
            <Link to="/fetch">Redux toolkit</Link>
          </li>
          <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
        </ul>
      </HorizontalNav>
      <Separator />
    </>
  )
}

export default MainHeader
