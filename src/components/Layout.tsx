import './Layout.scss'
import React, { FunctionComponent } from 'react'
import { Footer } from './Footer'
import { Header } from './Header'
import classNames from 'classnames'

type Props = {
  className?: string
}

export const Layout: FunctionComponent<Props> = ({ className, children }) => (
  <div className={classNames('Layout', className)}>
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
)
