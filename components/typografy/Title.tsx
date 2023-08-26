import React, { ReactNode } from 'react'

interface ITitle {
  children: ReactNode
}

const Title: React.FC<ITitle> = ({ children }) => {
  return (
    <div className="flex flex-row  justify-center  mt-32">
      <h1 className=" text-[#1E293B] text-[36px] font-semibold ">{children}</h1>
    </div>
  )
}

export default Title
