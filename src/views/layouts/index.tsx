import type { ReactNode } from 'react'
import React from 'react'

import Footer from '../components/footer'
import Header from '../components/header'

type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className='size-full'>
      <Header />
      <div className='flex-1'>{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
