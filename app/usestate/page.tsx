import Title from '@/components/typografy/Title'
import { Button } from '@/components/ui/button'
import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import Subtitle from '@/components/typografy/Subtitle'
import Counter from '@/components/examples/useState/Counter'
import { Separator } from '@/components/ui/separator'

const useState = () => {
  return (
    <>
      <div className="">
        <div className=" ">
          <div className="">
            <Title>UseState</Title>
          </div>
          <div className="flex justify-end  mx-80">
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
          <div className=" flex flex-col justify-center mt-10 mx-[110px]">
            <Subtitle>Примеры</Subtitle>
            <Separator />
            <Counter />
          </div>
        </div>
      </div>
    </>
  )
}

export default useState
