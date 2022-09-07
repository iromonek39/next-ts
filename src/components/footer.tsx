// import Head from 'next/head'
import { css } from '@emotion/react'
// import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Image from 'next/image'

const Footer = () => {
  const router = useRouter()
  const [isHome, setIsHome] = useState<boolean>(false)

  const changeVal = () => {
    setIsHome(!isHome)
  }

  return (
    <>
      <footer
        css={css`
          margin-top: auto;
        `}
      >
        footer
      </footer>
    </>
  )
}

export default Footer
