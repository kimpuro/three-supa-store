import React, { ReactNode } from 'react'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout
