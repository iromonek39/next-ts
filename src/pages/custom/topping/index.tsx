import { css } from '@emotion/react'
import Result from 'components/Result'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateValue } from '../../../features/total/totalSlice'
import type { RootState } from 'app/store'
import { useState } from 'react'

const Index = () => {
  const dispatch = useDispatch()
  const total = useSelector((state: RootState) => state.total.value)
  const [plus, setPlus] = useState(0)
  type Topping = {
    name: string
    id: number
    price: number
    kcal: number
  }

  const toppings: Topping[] = [
    {
      id: 1,
      name: 'ナチュラルスライスチーズ(2枚)',
      price: 50,
      kcal: 180,
    },
    {
      id: 2,
      name: 'クリームタイプチーズ(20g)',
      price: 70,
      kcal: 179,
    },
    {
      id: 3,
      name: 'マスカルポーネチーズ(20g)',
      price: 100,
      kcal: 196,
    },
    {
      id: 4,
      name: 'たまご(1スクープ)',
      price: 70,
      kcal: 190,
    },
  ]

  const selectedTopping = (topping: Topping) => {
    dispatch(updateValue(total + topping.kcal))
  }

  useEffect(() => {
    console.log(total)
  })

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
          {toppings.map((topping) => (
            <li
              key={topping.id}
              css={css`
                width: 50%;
              `}
              onClick={() => selectedTopping(topping)}
            >
              {topping.name},{topping.kcal}kcal
            </li>
          ))}
        </ul>
      </div>
      <Link href="/">トップ</Link>
      <Result props={total} />
    </>
  )
}

export default Index
