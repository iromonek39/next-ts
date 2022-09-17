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
  type Salada = {
    name: string
    id: number
    kcal: number
  }

  const saladas: Salada[] = [
    {
      id: 1,
      name: 'レタス',
      kcal: 0,
    },
    {
      id: 2,
      name: 'トマト',
      kcal: 0,
    },
    {
      id: 3,
      name: 'ピーマン',
      kcal: 0,
    },
    {
      id: 4,
      name: 'オニオン',
      kcal: 0,
    },
  ]

  const selectedSaladas = (salad: Salada) => {
    dispatch(updateValue(total + salad.kcal))
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
          {saladas.map((salada) => (
            <li
              key={salada.id}
              css={css`
                width: 50%;
              `}
              onClick={() => selectedSaladas(salada)}
            >
              {salada.name},{salada.kcal}kcal
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
