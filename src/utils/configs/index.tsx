import type { INav } from '@/types/interfaces/INav'

import IconDesktop from '../icon/iconDesktop'
import IconMoon from '../icon/iconMoon'
import IconSun from '../icon/iconSun'

export const configs = {
  appName: 'HD Truyện',
}

export const NAVIGATION: INav[] = [
  {
    title: 'Trang chủ',
    path: '/',
  },
  {
    title: 'Thể loại',
    path: '/categories',
  },
  {
    title: 'Sắp xếp',
    path: '/sort',
  },
]

export const MULTI_THEME = [
  {
    value: 'light',
    icon: <IconSun />,
  },
  {
    value: 'dark',
    icon: <IconMoon />,
  },
  {
    value: 'system',
    icon: <IconDesktop />,
  },
]
