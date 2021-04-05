import './Header.scss'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Arrow } from './Arrow'
import { Link } from 'gatsby'
import { Logo } from './Logo'
import classNames from 'classnames'
import useOnClickOutside from 'use-onclickoutside'

const BREAKPOINT = 1000
const PEEK_THRESHOLD = 50

export const Header = () => {
  const [expanded, setExpanded] = useState(false)

  const collapse = useCallback(() => setExpanded(false), [setExpanded])
  const toggle = useCallback(() => setExpanded(!expanded), [
    expanded,
    setExpanded,
  ])

  const [peek, setPeek] = useState(true)
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY <= PEEK_THRESHOLD) setPeek(true)
      else setPeek(false)
    }

    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [setPeek])

  const padLogo = useMemo(
    () => expanded || (peek && window.innerWidth >= BREAKPOINT),
    [expanded, peek],
  )

  const ref = useRef(null)
  useOnClickOutside(ref, collapse)

  return (
    <header className={classNames('Header', { expanded, peek })}>
      <div className="Header__backdrop"></div>

      <div className={classNames('Header__logo', { pad: padLogo })}>
        <Link to="/">
          <Logo />
        </Link>
      </div>

      <div className="Header__menu" ref={ref}>
        <span className="Header__menu__toggle link" onClick={toggle}>
          <Arrow />
        </span>

        <div className="Header__menu__wrapper">
          <Link to="/raumgestaltung" onClick={collapse}>
            Raumgestaltung
          </Link>
          <br />
          <Link to="/pflanzplanung" onClick={collapse}>
            Pflanzplanung
          </Link>
          <br />
          <Link to="/gartenentwicklung" onClick={collapse}>
            Gartenentwicklung
          </Link>
          <br />

          <div className="Header__menu__wrapper__expanded">
            <Link to="/wir" onClick={collapse}>
              Wir
            </Link>
            <br />
            <Link to="/projekte" onClick={collapse}>
              Projekte
            </Link>
            <br />
            <Link to="/journal" onClick={collapse}>
              Journal
            </Link>
            <br />
          </div>
        </div>
      </div>
    </header>
  )
}
