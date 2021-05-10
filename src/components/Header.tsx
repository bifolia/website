import './Header.scss'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Arrow } from './Arrow'
import { Link } from 'gatsby'
import { Logo } from './Logo'
import { Page } from '../types'
import classNames from 'classnames'
import useOnClickOutside from 'use-onclickoutside'

const BREAKPOINT = 1000
const PEEK_THRESHOLD = 50

type Props = {
  page?: Page
}

export const Header = ({ page }: Props) => {
  const [expanded, setExpanded] = useState(false)

  const collapse = useCallback(() => setExpanded(false), [setExpanded])
  const toggle = useCallback(
    () => setExpanded(!expanded),
    [expanded, setExpanded],
  )

  const [peek, setPeek] = useState(true)
  useEffect(() => {
    const onScroll = () => setPeek(window.scrollY <= PEEK_THRESHOLD)

    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [setPeek])

  const [padLogo, setPadLogo] = useState<boolean>()
  const [padLogoTransition, setPadLogoTransition] = useState(false)
  useEffect(() => {
    const onResize = () => {
      setPadLogo(window.innerWidth >= BREAKPOINT && (expanded || peek))
      setTimeout(() => setPadLogoTransition(true), 0)
    }

    onResize()
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [expanded, peek, setPadLogo, setPadLogoTransition])

  const ref = useRef(null)
  useOnClickOutside(ref, collapse)

  return (
    <header className={classNames('Header', { expanded, peek })}>
      <div className="Header__backdrop"></div>

      <div
        className={classNames('Header__logo', {
          pad: padLogo,
          transition: padLogoTransition,
        })}
      >
        <Link to="/">
          <Logo />
        </Link>
      </div>

      <div className="Header__menu" ref={ref}>
        <span className="Header__menu__toggle link" onClick={toggle}>
          <Arrow />
        </span>

        <div className="Header__menu__wrapper">
          <Link
            to="/raumgestaltung"
            className={classNames({ active: page === Page.Raumgestaltung })}
            onClick={collapse}
          >
            Raumgestaltung
          </Link>
          <br />
          <Link
            to="/pflanzplanung"
            className={classNames({ active: page === Page.Pflanzplanung })}
            onClick={collapse}
          >
            Pflanzplanung
          </Link>
          <br />
          <Link
            to="/gartenentwicklung"
            className={classNames({ active: page === Page.Gartenentwicklung })}
            onClick={collapse}
          >
            Gartenentwicklung
          </Link>
          <br />

          <div className="Header__menu__wrapper__expanded">
            <Link
              to="/wir"
              className={classNames({ active: page === Page.Wir })}
              onClick={collapse}
            >
              Wir
            </Link>
            <br />
            <Link
              to="/projekte"
              className={classNames({ active: page === Page.Projekte })}
              onClick={collapse}
            >
              Projekte
            </Link>
            <br />
            <Link
              to="/journal"
              className={classNames({ active: page === Page.Journal })}
              onClick={collapse}
            >
              Journal
            </Link>
            <br />
          </div>
        </div>
      </div>
    </header>
  )
}
