import { css } from '@emotion/react'
import Link from 'next/link'

type Props = {
  text: string
  color?: number
  link: string
}

export const Button: React.FC<Props> = (props) => {
  return (
    <>
      <Link href={`/${props.link}`}>
        <button
          css={css`
            width: 40%;
            height: 100px;
            margin-bottom: 16px;
          `}
        >
          {props.text}
        </button>
      </Link>
    </>
  )
}
