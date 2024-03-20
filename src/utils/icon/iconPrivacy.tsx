import React from 'react'

type IconPrivacy = {
  width?: number
  height?: number
  stroke?: string
}
const iconPrivacy = ({ width, height, stroke }: IconPrivacy) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width || '16'}
      height={height || '16'}
      viewBox='0 0 16 16'
      fill='none'
    >
      <path
        d='M6.99332 1.48679L3.66665 2.74012C2.89998 3.02679 2.27332 3.93345 2.27332 4.74679V9.70012C2.27332 10.4868 2.79332 11.5201 3.42665 11.9935L6.29332 14.1335C7.23332 14.8401 8.77998 14.8401 9.71998 14.1335L12.5866 11.9935C13.22 11.5201 13.74 10.4868 13.74 9.70012V4.74679C13.74 3.92679 13.1133 3.02012 12.3466 2.73345L9.01998 1.48679C8.45332 1.28012 7.54665 1.28012 6.99332 1.48679Z'
        stroke={stroke || '#2A313A'}
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M8.00002 8.33341C8.7364 8.33341 9.33335 7.73646 9.33335 7.00008C9.33335 6.2637 8.7364 5.66675 8.00002 5.66675C7.26364 5.66675 6.66669 6.2637 6.66669 7.00008C6.66669 7.73646 7.26364 8.33341 8.00002 8.33341Z'
        stroke='#2A313A'
        stroke-width='1.5'
        stroke-miterlimit='10'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M8 8.33325V10.3333'
        stroke={stroke || '#2A313A'}
        stroke-width='1.5'
        stroke-miterlimit='10'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  )
}

export default iconPrivacy
