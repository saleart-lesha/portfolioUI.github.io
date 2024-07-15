import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import classes from './Header.module.css'
import clsx from 'clsx'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  let location = useLocation()

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location])

  return (
    <header className={classes.header}>
      <nav className={classes.menu_body}>
        <ul className={isMenuOpen ? `${classes.menu_list} ${classes.active}` : classes.menu_list}>
          <li className={classes.menu_item}>
            <Link className={classes.menu_links} to='/'>
              <span
                className={clsx({
                  [classes.menu_links_text]: true,
                  [classes.menu_links_text_active]: location.pathname === '/',
                })}
              >
                Contact
              </span>
            </Link>
          </li>
          <li>
            <Link className={classes.menu_links} to='/works'>
              <span
                className={clsx({
                  [classes.menu_links_text]: true,
                  [classes.menu_links_text_active]: location.pathname === '/works',
                })}
              >
                Works
              </span>
            </Link>
          </li>
          <li>
            <Link className={classes.menu_links} to='/blog'>
              <span
                className={clsx({
                  [classes.menu_links_text]: true,
                  [classes.menu_links_text_active]: location.pathname === '/blog',
                })}
              >
                Blog
              </span>
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
