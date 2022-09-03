// import Head from 'next/head'
// import Link from 'next/link'
import { ReactNode } from 'react'
import Header from './header'

type Props = {
  children?: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Header />
      <div className="container">{children}</div>
      <footer className=""></footer>
    </div>
  )
}

export default Layout
