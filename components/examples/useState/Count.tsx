'use client'
import React, { useState, useEffect } from 'react'
import CardWrapper from '../../common/Card'
import { Separator } from '@/components/ui/separator'
import SmallTitle from '@/components/typografy/SmallTitle'

const Count = () => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    setInterval(() => {
      setCount((prev) => prev + 1)
    }, 60000)
  }, [])
  console.log(count)
  return (
    <div className="flex items-center gap-5 flex-wrap justify-center">
      <div className=" w-1/3">
        <CardWrapper>
          <SmallTitle>Должен добавлять по 1, setInterval на 60 сек</SmallTitle>
          <p>
            Но хрен поими почему добавляет по 2, и вообще ломается setInterval
            (ускаряется)
          </p>
          <Separator />
          <p className=" text-red-600 font-semibold">Count: {count}</p>
        </CardWrapper>
      </div>
      <div className=" text-yellow-700">cltc photo</div>
    </div>
  )
}

export default Count

// import React, { useState, useEffect } from 'react'
// import CardWrapper from '../../common/Card'
// import Divider from '../../common/Divider'
// import SmallTitle from '../../common/typografy/SmallTitle'

// const Count = () => {
//     const [count, setCount] = useState(0)
//     useEffect(() => {
//         setInterval(() => {
//             setCount((prev) => prev + 1)
//         }, 60000)
//     }, [])
//     console.log(count)
//     return (
//         <CardWrapper>
//             <SmallTitle>Должен добавлять по 1, setInterval на 60 сек</SmallTitle>
//             <p>
//                 Но хрен поими почему добавляет по 2,
//                 и вообще ломается setInterval (ускаряется)
//             </p>
//             <Divider/>
//             <h1>{count}</h1>
//         </CardWrapper>
//     )
// }

// export default Count
