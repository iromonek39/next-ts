import { css } from '@emotion/react'
import Link from 'next/link'

const index = () => {
  return (
    <>
      <div
        css={css`
          width: 50%;
          margin: 0 auto;
        `}
      >
        <ul
          css={css`
            display: flex;
            width: 100%;
            flex-wrap: wrap;
          `}
        >
          <li
            css={css`
              width: 50%;
            `}
          >
            BLT
          </li>
          <li
            css={css`
              width: 50%;
            `}
          >
            サラダチキン
          </li>
          <li
            css={css`
              width: 50%;
            `}
          >
            チリチキン
          </li>
        </ul>
      </div>
      <Link href="/">トップ</Link>
    </>
  )
}

export default index
