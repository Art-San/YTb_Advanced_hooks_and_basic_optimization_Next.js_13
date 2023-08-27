'use client'
import SmallTitle from '@/components/typografy/SmallTitle'
import { Separator } from '@/components/ui/separator'
import React, { useState } from 'react'
import CardWrapper from '../../common/Card'

const Counter = () => {
  const [count, setCount] = useState(0)

  const handeleIncrement = () => {
    // setCount(count + 1) эти два
    // setCount(count + 1) схлопнутся
    setCount((prevState) => prevState + 1)
    setCount((prevState) => prevState + 1)
    // console.log('count', count)
  }

  const handleDecrement = () => {
    setCount((prevState) => prevState - 1)
  }

  return (
    <CardWrapper>
      <SmallTitle>Подсчет количества рендеров</SmallTitle>
      <Separator />
      <p>count: {count}</p>
      <button className="btn btn-warning m-1" onClick={handleDecrement}>
        минус
      </button>
      <button className="btn btn-primary m-1" onClick={handeleIncrement}>
        плюс
      </button>
    </CardWrapper>
  )
}

export default Counter
