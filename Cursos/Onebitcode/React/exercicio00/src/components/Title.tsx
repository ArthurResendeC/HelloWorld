import React from 'react'

interface TitleProps{
    children:React.ReactNode
}

const Div = (props:TitleProps) => {
  return (
    <div>{props.children}</div>
  )
}

export default Div