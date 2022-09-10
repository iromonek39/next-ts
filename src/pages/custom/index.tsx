import { css } from '@emotion/react'
import Link from 'next/link'

const index = () => {
  type Sandwich = {
    name: string
    id: number
  }

  const sandwiches: Sandwich[] = [
    {
      id: 1,
      name: 'BLT',
    },
    {
      id: 2,
      name: 'サラダチキン',
    },
    {
      id: 3,
      name: 'チリチキン',
    },
  ]

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
          {sandwiches.map((sandwich) => (
            <li
              key={sandwich.id}
              css={css`
                width: 50%;
              `}
            >
              {sandwich.name}
            </li>
          ))}
        </ul>
      </div>
      <Link href="/">トップ</Link>
    </>
  )
}

export default index
