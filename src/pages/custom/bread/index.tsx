import { css } from '@emotion/react'
// import Context from 'lib/store/context'
// import { reducer } from 'lib/store/reducers'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import { updateValue } from '../../../features/total/totalSlice'
import type { RootState } from 'app/store'
import React, { useEffect, useReducer, useState } from 'react'
import Result from 'components/Result'

const Index = () => {
  const router = useRouter()
  const [totalPrice, setTotalPrice] = useState(0)
  const dispatch = useDispatch()
  const total = useSelector((state: RootState) => state.total.value)
  const [plus, setPlus] = useState(0)
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

  const selectedBread = (bread: Bread) => {
    dispatch(updateValue(total + bread.kcal))
    router.push('/custom/topping')
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
          {Breads.map((bread) => (
            <li
              key={bread.id}
              css={css`
                width: 50%;
              `}
              onClick={() => selectedBread(bread)}
            >
              {bread.name},{bread.kcal}kcal
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
