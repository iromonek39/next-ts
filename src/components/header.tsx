// import Head from 'next/head'
import { css } from '@emotion/react'
// import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Image from 'next/image'

const Header = () => {
  const router = useRouter()
  const [isHome, setIsHome] = useState<boolean>(false)

  const changeVal = () => {
    setIsHome(!isHome)
  }

  return (
    <>
      <header
        css={css`
          width: 100%;
          background: #1f8940;
          padding: 16px 0;
        `}
      >
        <div
          css={css`
            margin: 0 32px;
          `}
        >
          <Image src="/logo.png" alt="SUBWAY" width={213} height={42} />
        </div>
      </header>
    </>
  )
}

export default Header
