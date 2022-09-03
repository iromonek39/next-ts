// import Head from 'next/head'
import { css } from '@emotion/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

const Header = () => {
  const router = useRouter()
  const [isHome, setIsHome] = useState<boolean>(false)

  const changeVal = () => {
    setIsHome(!isHome)
  }

  return (
    <>
      <header>
        {isHome ? (
          <div css={HeaderPrev}>
            <span css={HeaderPrevText}>戻る</span>
          </div>
        ) : (
          <div css={HeaderPrev}>bbb</div>
        )}
        <button onClick={changeVal}>クリック</button>
        <p css={HeaderTitle}>{router.pathname}</p>
        {/* <div
        v-show="this.$route.name !== 'Home'"
        class="header__prev-btn"
        @click="backToPage()">
        <img
          src="@/assets/img/icon/icon-prev.png"
          alt="prev">
        <span class="header__prev-btn-text">戻る</span>
      </div>
      <p class="header__title">
        {{ this.$route.meta.headerName }}
      </p>
      <p class="header__course">{{ course }}</p>
      <div
        v-if="this.$route.name === 'InputScoreDetail'"
        class="header__next-btn"
        @click="nextToHole()">
        <img
          src="@/assets/img/icon/icon-next.png"
          alt="prev">
        <span
          :class="nextHole === '進む' ? 'header__next-btn-nextHole': 'header__next-btn__back-InputScore'"
          class="header__next-btn-text">
          {{ nextHole }}</span>
      </div> */}
      </header>
      <Link href="/">
        <a>home</a>
      </Link>
      <Link href="/test">
        <a>test</a>
      </Link>
    </>
  )
}

const HeaderPrev = css``
const HeaderPrevText = css``
const HeaderTitle = css``

export default Header
