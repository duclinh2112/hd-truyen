import React from 'react'

type Tag ={
  content: string
}
const tag = ({content}:Tag) => {
  return (
    <div className='text-[14px] text-black text-left leading-[24px] rounded-[8px] px-[12px] py-[2px] bg-white'>{content}</div>
  )
}

export default tag