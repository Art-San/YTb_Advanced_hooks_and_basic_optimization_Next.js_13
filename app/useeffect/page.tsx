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
import Count from '@/components/examples/useState/Count'
import Click from '@/components/examples/useState/Click'
import ExampleBad from '@/components/examples/useState/ExampleBad'
import ExampleColor from '@/components/examples/useState/ExampleColor'
import Example4 from '@/components/examples/useState/Example4'

const useState = () => {
  return (
    <>
      <div className=" flex flex-col">
        <div className="flex justify-center">
          <Title>UseEffect</Title>
        </div>

        <div className="flex justify-center mx-6 sm:mx-4 md:mx-20 lg:mx-32 xl:mx-64">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className=" text-[24px]">
                Информация
              </AccordionTrigger>
              <AccordionContent className="text-[18px]">
                <div className=" flex flex-col gap-3">
                  <p>
                    <code>useEffect</code> помогает отслеживать рендеры нашего
                    приложения. В момент рендера он вызовет переданный ему{' '}
                    <code>callback</code>. useEffect() может срабатывать при:
                    каждом ререндере компонента. первом рендере. изменении
                    какой-то зависимости. Демонтаже компонента.
                  </p>
                  <p>
                    <code> useEffect(() {}) </code> При каждом ререндере
                  </p>
                  <p>
                    <code> useEffect(() {}, []) </code> При первом рендере
                  </p>
                  <p>
                    <code> useEffect(() {}, [someProps1, someProps1]) </code>{' '}
                    При изменении зависимостей someProps1, someProps1
                  </p>
                  <p>
                    {' '}
                    <code>useEffect(() return ())</code> вызовется при демонтаже
                    компонента{' '}
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      <div className="flex flex-col items-center w-[1120px] mx-auto">
        <Subtitle>Примеры</Subtitle>
        <div className=" flex flex-col">
          {/* <Counter />
          <Count />
          <Click />
          <ExampleBad />
          <ExampleColor />
          <Example4 /> */}
        </div>
      </div>
    </>
  )
}

export default useState
