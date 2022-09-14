import { css } from '@emotion/react'
import Result from 'components/Result'
import Link from 'next/link'
import React from 'react'

const index = () => {
  type Bread = {
    name: string
    id: number
    kcal: number
  }

  const Breads: Bread[] = [
    {
      id: 1,
      name: 'ウィート',
      kcal: 180,
    },
    {
      id: 2,
      name: 'ホワイト',
      kcal: 179,
    },
    {
      id: 3,
      name: 'セサミ',
      kcal: 196,
    },
    {
      id: 4,
      name: 'ハニーオーツ',
      kcal: 190,
    },
  ]

  const selectedBread = (event: React.MouseEvent<HTMLInputElement>) => {
    console.log(event)
  }

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
          {Breads.map((bread) => (
            <li
              key={bread.id}
              css={css`
                width: 50%;
              `}
              onClick={selectedBread}
            >
              {bread.name},{bread.kcal}kcal
            </li>
          ))}
        </ul>
      </div>
      <Link href="/">トップ</Link>
      <Result />
    </>
  )
}

export default index
