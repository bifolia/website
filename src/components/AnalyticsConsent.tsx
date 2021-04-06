import './AnalyticsConsent.scss'
import React, { useCallback, useState } from 'react'
import { Link } from 'gatsby'
import classNames from 'classnames'
import { useCookies } from 'react-cookie'

const COOKIE_NAME = 'allowedCookies'

export const AnalyticsConsent = () => {
  const [cookies, setCookie] = useCookies([])
  const [active, setActive] = useState<boolean>(!cookies[COOKIE_NAME])

  const close = useCallback(() => {
    setCookie(COOKIE_NAME, true, {
      path: '/',
    })
    setActive(false)
  }, [setActive, setCookie])

  return (
    <div className={classNames('AnalyticsConsent', { active })}>
      Wir nutzen Cookies, um sicherzustellen, dass Du die bestmögliche Erfahrung
      auf unserer Seite machst. Nutzt Du unsere Seite weiter, nehmen wir an,
      dass Du damit einverstanden bist.
      <span className="AnalyticsConsent__action">
        <span className="link" onClick={close}>
          Einverstanden
        </span>
        <Link to="/datenschutz">Datenschutzerklärung</Link>
      </span>
    </div>
  )
}
