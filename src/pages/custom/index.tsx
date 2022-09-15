import { css } from '@emotion/react'
// import Context from 'lib/store/context'
// import { reducer } from 'lib/store/reducers'
import Link from 'next/link'
import { useRouter } from 'next/router'
import type { RootState } from 'app/store'
import { useSelector, useDispatch } from 'react-redux'
import { updateValue } from '../../features/total/totalSlice'
import React, { useReducer, useState } from 'react'

type Props = {
  onClick: (event: React.MouseEvent<HTMLInputElement>) => void
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onkeypress: (event: React.KeyboardEvent<HTMLInputElement>) => void
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void
  onFocus: (event: React.FocusEvent<HTMLInputElement>) => void
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  onClickDiv: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

const Index = () => {
  const router = useRouter()
  const [totalPrice, setTotalPrice] = useState(0)
  const total = useSelector((state: RootState) => state.total.value)
  const dispatch = useDispatch()
  // const initialState = { sandwichePrice: 0 }
  // const [state, dispatch] = useReducer(reducer, initialState)

  type Sandwich = {
    name: string
    id: number
    price: number
    kcal: number
  }

  const sandwiches: Sandwich[] = [
    {
      id: 1,
      name: 'BLT',
      price: 430,
      kcal: 330,
    },
    {
      id: 2,
      name: 'サラダチキン',
      price: 530,
      kcal: 278,
    },
    {
      id: 3,
      name: 'チリチキン',
      price: 630,
      kcal: 273,
    },
  ]

  const selectedSandwich = (sandwich: Sandwich) => {
    dispatch(updateValue(sandwich.kcal))
    router.push('/custom/bread')
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
          {sandwiches.map((sandwich) => (
            <li
              key={sandwich.id}
              css={css`
                width: 50%;
              `}
              onClick={() => selectedSandwich(sandwich)}
            >
              {sandwich.name},¥{sandwich.price}/{sandwich.kcal}kcal
            </li>
          ))}
        </ul>
      </div>
      <Link href="/">トップ</Link>
    </>
  )
}

export default Index
