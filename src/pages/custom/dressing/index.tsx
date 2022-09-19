import { css } from '@emotion/react'
import Result from 'components/Result'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateValue } from '../../../features/total/totalSlice'
import type { RootState } from 'app/store'
import { useState } from 'react'

const Index = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const total = useSelector((state: RootState) => state.total.value)
  const [plus, setPlus] = useState(0)
  type Dressing = {
    name: string
    id: number
    price: number
    kcal: number
  }

  const dressings: Dressing[] = [
    {
      id: 1,
      name: 'オイル＆ビネガー\n塩こしょう',
      price: 50,
      kcal: 180,
    },
    {
      id: 2,
      name: 'シーザー\nドレッシング',
      price: 70,
      kcal: 179,
    },
    {
      id: 3,
      name: '野菜クリーミー\nドレッシング',
      price: 100,
      kcal: 196,
    },
    {
      id: 4,
      name: 'まろやか\nレモンドレッシング',
      price: 70,
      kcal: 190,
    },
  ]

  const selectedDressing = (dressing: Dressing) => {
    dispatch(updateValue(total + dressing.kcal))
    router.push('/custom/salad')
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
          {dressings.map((dressing) => (
            <li
              key={dressing.id}
              css={css`
                width: 50%;
              `}
              onClick={() => selectedDressing(dressing)}
            >
              {dressing.name},{dressing.kcal}kcal
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
