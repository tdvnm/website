import React from 'react'
import styled from 'styled-components'

import Shubhro from './img/shubhro.jpg'
import config from '../config'
import ThemeToggle from './ThemeToggle'

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`

const Intro = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const AngadImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 7px;
  
`

const Name = styled.div`
  margin-top: 30px;
  font-size: 2rem;
  font-weight: bold;
`

const Nav = styled.div`
  width: 100%;
`

const NavItem = styled.a`
  display: block;
  text-decoration: none;
  margin: 15px 0;
  font-size: 20px;
  font-weight: 600;
  color: inherit;
  cursor: pointer;

  &:hover {
    color: ${config.baseColor};
  }
`

const SocialIconContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  flex-wrap: wrap;
`

const SocialIconA = styled.a`
  text-decoration: none;
  color: inherit;
`

const SocialIcon = styled.i`
  font-size: 1.2rem;
  transition: color 0.3s ease;
  &:hover {
    color: ${config.baseColor};
  }
`

export default () => (
  <Sidebar className="sidebar">
    <Intro className="intro">
      <AngadImg alt="Shubhro" src={Shubhro} />
      <Name>Shubhro Gupta</Name>
      <br />
        <ThemeToggle />
      <br />
    </Intro>

    <Nav className="nav">
      {config.navItems.map((navItem, i) => (
        <NavItem
          key={i}
          onClick={() =>
            document
              .querySelector(`#${navItem.id}`)
              .scrollIntoView({ behavior: 'smooth' })
          }
        >
          {navItem.display}
        </NavItem>
        

      ))}
    </Nav>

    <SocialIconContainer className="social">
      {config.social.map((icon, i) => (
        <SocialIconA target="__blank" key={i} href={icon.link}>
          <SocialIcon className={icon.fa} />
        </SocialIconA>
      ))}
    </SocialIconContainer>
  </Sidebar>
)
