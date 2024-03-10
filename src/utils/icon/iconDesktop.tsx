import React from 'react'

import type { IconProps } from '@/types/interfaces/IIcon'

const IconDesktop = ({
  width = 22,
  height = 22,
  color = 'currentColor',
}: IconProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 576 512'
      fill={color}
      color={color}
    >
      <path d='M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64H240l-10.7 32H160c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H346.7L336 416H512c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zM512 64V288H64V64H512z' />
    </svg>
  )
}

export default IconDesktop