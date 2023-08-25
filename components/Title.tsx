import React, { ReactNode } from 'react'

interface ITitle {
  children: ReactNode
}

const Title: React.FC<ITitle> = ({ children }) => {
  return (
    <div className="flex justify-center mt-32">
      <h1 className=" text-white text-[36px] font-semibold ">{children}</h1>
    </div>
  )
}

export default Title
