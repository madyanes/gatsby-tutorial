import React from 'react'
import Footer from './footer'
import Header from './header'
import '../styles/style.css'

const Layout = (props) => {
  return (
    <div>
      <Header />
      { props.children }
      <Footer />
    </div>
  )
}

export default Layout
