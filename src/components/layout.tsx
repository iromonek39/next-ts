// import Head from 'next/head'
// import Link from 'next/link'
import { css } from '@emotion/react'
import { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'

type Props = {
  children?: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div
      css={css`
        display: flex;
        min-height: 100vh;
        flex-direction: column;
      `}
    >
      <Header />
      <main css={css``}>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
