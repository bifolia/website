import './Header.scss'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Arrow } from './Arrow'
import { Link } from 'gatsby'
import { Page } from '../types'
import SVG from 'react-inlinesvg'
import classNames from 'classnames'
import useOnClickOutside from 'use-onclickoutside'

const BREAKPOINT = 0
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
          <SVG src="./logo.svg" title="bifolia" />
          <p className="Header__logo__subtitle">Büro für Gartengestaltung</p>
        </Link>
      </div>

      <div className="Header__menu" ref={ref}>
        <span className="Header__menu__toggle link" onClick={toggle}>
          <Arrow />
        </span>

        <div className="Header__menu__wrapper">
          <Link
            to="/projekte"
            className={classNames({ active: page === Page.Projekte })}
            onClick={collapse}
          >
            Projekte
          </Link>
          <br />
          <Link
            to="/philosophie"
            className={classNames({ active: page === Page.Philosophie })}
            onClick={collapse}
          >
            Philosophie
          </Link>
          <br />
          <Link
            to="/wir"
            className={classNames({ active: page === Page.Wir })}
            onClick={collapse}
          >
            Wir
          </Link>
          <br />
        </div>
      </div>
    </header>
  )
}
