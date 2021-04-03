import './Menu.scss'
import React, { useCallback, useRef, useState } from 'react'
import { Arrow } from './Arrow'
import { Link } from 'gatsby'
import classNames from 'classnames'
import useOnClickOutside from 'use-onclickoutside'

export const Menu = () => {
  const [expanded, setExpanded] = useState(false)

  const expand = useCallback(() => setExpanded(true), [setExpanded])
  const collapse = useCallback(() => setExpanded(false), [setExpanded])

  const ref = useRef(null)
  useOnClickOutside(ref, collapse)

  return (
    <div className={classNames('Menu', { expanded })}>
      <div className="Menu__backdrop"></div>

      <div className="Menu__wrapper" ref={ref}>
        <Link to="/raumgestaltung">Raumgestaltung</Link>
        <br />
        <Link to="/pflanzplanung">Pflanzplanung</Link>
        <br />
        <Link to="/gartenentwicklung">Gartenentwicklung</Link>
        <br />

        <span className="Menu__wrapper__collapsed link" onClick={expand}>
          <Arrow />
        </span>
        <div className="Menu__wrapper__expanded">
          <Link to="/projekte">Projekte</Link>
          <br />
          <Link to="/journal">Journal</Link>
          <br />
          <Link to="/team">Team</Link>
          <br />
        </div>
      </div>
    </div>
  )
}
