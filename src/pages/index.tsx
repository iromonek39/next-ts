import { css } from '@emotion/react'
import { Button } from 'components/parts/Button'
import type { NextPage } from 'next'
// import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
      <h1
        css={css`
          font-size: 24px;
          text-align: center;
        `}
      >
        My subway
      </h1>
      <Button text="カスタマイズ" link="custom" />
      <span className={styles.logo}>
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      </span>
    </>
  )
}

export default Home
