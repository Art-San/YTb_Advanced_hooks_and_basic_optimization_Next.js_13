'use client'
import Images from '@/components/common/Screens'
import SmallTitle from '@/components/typografy/SmallTitle'
import { Button } from '@/components/ui/button'
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
    <>
      <div className="flex items-center gap-5 flex-wrap justify-center">
        <div>
          <CardWrapper>
            <SmallTitle>Подсчет количества рендеров</SmallTitle>
            <Separator className="mt-4  bg-slate-300" />
            <p>count: {count}</p>

            <Button
              size={'costom'}
              variant={'positive'}
              onClick={handleDecrement}
            >
              минус
            </Button>
            <Button
              size={'costom'}
              variant={'warning'}
              onClick={handeleIncrement}
            >
              плюс
            </Button>
            {/* <button className="bg-[#FFC107] m-1 px-4 py-2 rounded-md"onClick={handleDecrement}>минус</button> */}
            {/* <button className="bg-[#0D6EFD] m-1 px-4 py-2 rounded-md text-white" onClick={handeleIncrement}>плюс</button> */}
          </CardWrapper>
        </div>
        <div>
          <Images />
        </div>
      </div>
    </>
  )
}

export default Counter
