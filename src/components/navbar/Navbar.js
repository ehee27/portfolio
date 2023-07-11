import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react'

import { IconButton } from '@material-ui/core'
import './navbar.css'

// BEM = Block Element Modifier

// Reusable Menu links to use in our NavBar - also in ternary for mobile
const Menu = () => (
  <>
    {/* <div className="gpt3__navbar-links_container"> */}
    <p>
      <a href="#about">About</a>
    </p>
    <p>
      <a href="#projects">Projects</a>
    </p>
    <p>
      <a href="#tech">Tech</a>
    </p>
    {/* </div> */}
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <div className="navbar">
      <div className="logo">TwoSeven</div>
      <div className="links-container">
        <Menu />
      </div>

      <div className="navbar-socialIcons">
        <IconButton
          style={{ color: 'orangered' }}
          href="https://github.com/ehee27"
        >
          <GithubLogo />
        </IconButton>
        <IconButton
          style={{ color: 'orangered' }}
          href="https://github.com/ehee27"
        >
          <LinkedinLogo />
        </IconButton>
      </div>
      {/* // Create our Menu toggle feature - ternary using the 'Ri' icons - uses 'toggleMenu' state - classNames set the style with the animation */}
      <div className="navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="black"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="black"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="navbar-menu_container scale-up-center">
            <div className="navbar-menu_container-links">
              <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
