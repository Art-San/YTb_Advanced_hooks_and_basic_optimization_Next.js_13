import Title from '@/components/typografy/Title'

import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import Subtitle from '@/components/typografy/Subtitle'

import Counter from '@/components/examples/useState/Counter'
import Form from '@/components/forma/Forma'
import Count from '@/components/examples/useState/Count'
import Click from '@/components/examples/useState/Click'
import ExampleBad from '@/components/examples/useState/ExampleBad'
import ExampleColor from '@/components/examples/useState/ExampleColor'
import Example4 from '@/components/examples/useState/Example4'

const useState = () => {
  return (
    <>
      {/* <div className=" flex flex-col">
        <div className="flex justify-center">
          <Title>UseState</Title>
        </div>

        <div className="flex justify-center mx-6 sm:mx-4 md:mx-20 lg:mx-32 xl:mx-64">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className=" text-[24px]">
                Опредиление
              </AccordionTrigger>
              <AccordionContent className="text-[18px]">
                <code>useState</code> возвращает кортеж (массив), в котором
                содержится значение состояния и функция для его изменения. По
                соглашению название функции изменения состояния начинается с{' '}
                <code>set</code>.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div> */}

      {/* <div className=" flex flex-col justify-center ">
        <Subtitle>Примеры</Subtitle>
      </div> */}
      <div className="flex flex-col items-center w-[1120px] mx-auto">
        <Subtitle>Примеры</Subtitle>
        <Counter />
        {/* <Count /> */}
        {/* <Click /> */}
        {/* <ExampleBad /> */}
        {/* <ExampleColor /> */}
        <Example4 />
      </div>
    </>
  )
}

export default useState
