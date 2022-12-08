import './Layout.scss'
import React, { FunctionComponent, PropsWithChildren } from 'react'
import { AnalyticsConsent } from './AnalyticsConsent'
import { Footer } from './Footer'
import { Header } from './Header'
import { Page } from '../types'
import classNames from 'classnames'

type Props = {
  page?: Page
  className?: string
}

export const Layout: FunctionComponent<PropsWithChildren<Props>> = ({
  page,
  className,
  children,
}) => (
  <div className={classNames('Layout', className)}>
    <AnalyticsConsent />

    <Header page={page} />
    <main>{children}</main>
    <Footer />
  </div>
)
