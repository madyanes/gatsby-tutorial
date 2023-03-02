import React from 'react'
import { Link } from 'gatsby'
import * as headerStyles from './header.module.scss'

const Header = () => {
  return (
    <header className={ headerStyles.header }>
      <div className={ headerStyles.heroContent }>
        <p className={ headerStyles.brand }>
          <Link to='/'>Just Ian</Link>
        </p>
        <p className={ headerStyles.description }>
          I love building web apps.
        </p>
      </div>
      <nav className={ headerStyles.navContainer }>
        <ul className={ headerStyles.navList }>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/blog'>Blog</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
