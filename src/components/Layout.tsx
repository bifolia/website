import './Layout.scss'
import React, { FunctionComponent } from 'react'
import { Footer } from './Footer'
import { Header } from './Header'

export const Layout: FunctionComponent = ({ children }) => (
  <div className="Layout">
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
)
