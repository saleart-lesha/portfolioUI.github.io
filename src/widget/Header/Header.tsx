import { Link } from 'react-router-dom'
import { useState } from 'react'
import classes from './Header.module.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState<'/' | 'works' | 'blog'>('/')

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className={classes.header}>
      <nav className={classes.menu_body}>
        <ul className={isMenuOpen ? `${classes.menu_list} ${classes.active}` : classes.menu_list}>
          <li
            className={currentPage === '/' ? classes.menu_link_click : classes.menu_link}
            onClick={() => setCurrentPage('/')}
          >
            <Link to='/'>
              <span>Contact</span>
            </Link>
          </li>
          <li
            className={currentPage === 'works' ? classes.menu_link_click : classes.menu_link}
            onClick={() => setCurrentPage('works')}
          >
            <Link to='/works'>
              <span>Works</span>
            </Link>
          </li>
          <li
            className={currentPage === 'blog' ? classes.menu_link_click : classes.menu_link}
            onClick={() => setCurrentPage('blog')}
          >
            <Link to='/blog'>
              <span>Blog</span>
            </Link>
          </li>
        </ul>
        <div
          className={isMenuOpen ? `${classes.burger} ${classes.active}` : classes.burger}
          onClick={toggleMenu}
        >
          <span></span>
        </div>
      </nav>
    </header>
  )
}

export default Header
