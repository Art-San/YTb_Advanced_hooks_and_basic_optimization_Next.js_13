import React, { ReactNode } from 'react'

type SubtitleProps = {
  children: ReactNode
}

const Subtitle: React.FC<SubtitleProps> = ({ children }) => {
  return <h3 className=" text-lg font-semibold">{children}</h3>
}

export default Subtitle
