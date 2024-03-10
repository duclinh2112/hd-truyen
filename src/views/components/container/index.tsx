import type { ReactNode } from 'react'
import React from 'react'

type AppContainerProps = {
  children: ReactNode
}

const AppContainer = ({ children }: AppContainerProps) => {
  return <div className='mx-auto w-full max-w-container'>{children}</div>
}

export default AppContainer
