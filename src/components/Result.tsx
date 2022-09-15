// import Head from 'next/head'
import { css } from '@emotion/react'
// import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

const Result = ({ props }) => {
  return (
    <div
      css={css`
        position: fixed;
        right: 0;
        width: 20%;
      `}
    >
      合計:
      <p>{props}</p>
      <p></p>
    </div>
  )
}

export default Result
