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
      <div
        css={css`
          width: 100%;
          text-align: center;
        `}
      >
        <div>
          <Button text="カスタマイズ" link="custom" />
        </div>
        <div>
          <Button text="ランダム" link="random" />
        </div>
      </div>
    </>
  )
}

export default Home
