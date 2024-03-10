import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

import { MULTI_THEME, NAVIGATION } from '@/utils/configs'
import useTheme from '@/utils/hook/useTheme'
import IconSearch from '@/utils/icon/iconSearch'
import { IMG_AVATAR, LOGO } from '@/utils/images'

import AppContainer from '../container'

const Header = () => {
  const router = useRouter()
  const { theme, handleSelectTheme } = useTheme()

  return (
    <div className='flex h-header items-center bg-header text-header'>
      <AppContainer>
        <div className='flex items-center justify-between'>
          <div>
            <Link href='/'>
              <Image src={LOGO} alt='Động truyện' width={65} height={32} />
            </Link>
          </div>
          <div>
            <ul className='flex items-center gap-10'>
              {NAVIGATION.map((item, key) => {
                const active =
                  router.pathname.split('/', 2).join('/') === item.path
                return (
                  <li key={key}>
                    <Link
                      href={item.path}
                      className={`text-header ${active ? 'opacity-100' : 'opacity-80'} hover:opacity-100`}
                      onClick={() => router.push(item.path)}
                    >
                      {item.title}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className='h-10 w-[350px] rounded-full border border-solid border-[#F0F1F3] bg-main px-2 py-4'>
            <div className='flex size-full items-center gap-2 text-main'>
              <IconSearch />
              <input
                type='text'
                placeholder='Tìm kiếm'
                className='w-full bg-transparent text-main outline-none placeholder:text-main'
              />
            </div>
          </div>
          <div className='flex items-center gap-8'>
            <div className='flex h-10 items-center gap-3 rounded-lg bg-main px-2 py-4 text-main'>
              {MULTI_THEME.map((item, key) => {
                return (
                  <button
                    key={key}
                    onClick={() => handleSelectTheme(item.value)}
                    className={
                      item.value === theme ? 'text-yellow-400' : 'text-main'
                    }
                  >
                    {item.icon}
                  </button>
                )
              })}
            </div>
            <div className='flex cursor-pointer items-center gap-2'>
              <span>
                <Image
                  width={40}
                  height={40}
                  src={IMG_AVATAR}
                  alt='avatar'
                  className='rounded-full'
                />
              </span>
              <span className='text-header'>User</span>
            </div>
          </div>
        </div>
      </AppContainer>
    </div>
  )
}

export default Header
