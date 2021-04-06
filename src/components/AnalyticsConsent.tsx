import './AnalyticsConsent.scss'
import React, { useCallback, useEffect, useState } from 'react'
import classNames from 'classnames'

const KEY = 'allowedCookies'

export const AnalyticsConsent = () => {
  const [active, setActive] = useState(false)

  useEffect(() => setActive(localStorage.getItem(KEY) !== 'true'), [setActive])

  const close = useCallback(() => {
    localStorage.setItem(KEY, 'true')
    setActive(false)
  }, [setActive])

  return (
    <div className={classNames('AnalyticsConsent', { active })}>
      Wir nutzen Cookies, um sicherzustellen, dass Du die bestmögliche Erfahrung
      auf unserer Seite machst. Nutzt Du unsere Seite weiter, nehmen wir an,
      dass Du damit einverstanden bist.
      <span className="AnalyticsConsent__action">
        <span className="link" onClick={close}>
          Einverstanden
        </span>
        <a href="/datenschutz" target="_blank">
          Datenschutzerklärung
        </a>
      </span>
    </div>
  )
}
