// import React from 'react'
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
        <button>{props.text}</button>
      </Link>
    </>
  )
}
