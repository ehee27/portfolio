// import { Grid } from '@mui/material'
import './header.css'
import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { Button } from '@material-ui/core'

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <div className="logo">TwoSeven</div>
      </div>
      <div className="header-center">
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#tech">Tech</a>
          </li>
        </ul>
      </div>
      <div className="header-right">
        <div className="social-icons">
          {/* <p>
            <AiFillGithub style={{ color: 'black' }} />
          </p>

          <GithubLogo
            size={30}
            color="black"
            href="https://github.com/ehee27"
          />
          <AiFillLinkedin color="black" />
          <LinkedinLogo
            size={30}
            color="black"
            href="https://www.linkedin.com/in/sjlucas/"
          /> */}
        </div>
      </div>
    </div>
  )
}

export default Header
