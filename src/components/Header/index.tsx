import React from 'react'
import { NAVIGATION_MENUS } from 'src/constants/navigationMenu'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

const StyledHeader = styled.header`
  height: 100px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  background-color: gray;
  opacity: 0.8;
`

const H1 = styled.h1``

const Nav = styled.nav`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: flex-end;
  font-family: "ヒラギノ丸ゴ Pro W4","ヒラギノ丸ゴ Pro","Hiragino Maru Gothic Pro","ヒラギノ角ゴ Pro W3","Hiragino Kaku Gothic Pro","HG丸ｺﾞｼｯｸM-PRO","HGMaruGothicMPRO";
`

const Ul = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
`

const Li = styled.li`
  padding: 0 20px;
`

const Image = styled.img``

export const Header: React.FC = () => {
  return (
    <StyledHeader>
      <H1>
        <Image
          src={process.env.PUBLIC_URL + '/images/diverary-logo.webp'}
          alt="logo"
          width={80}
          height={80}
        />
      </H1>
      <Nav>
        <Ul>
          {NAVIGATION_MENUS.map((menu) => (
            <Li key={menu.path}>
              <Link to={menu.path}>{menu.name}</Link>
            </Li>
          ))}
        </Ul>
      </Nav>
    </StyledHeader>
  )
}
