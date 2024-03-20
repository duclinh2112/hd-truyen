import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { LOGO } from '@/utils/images'
import iconPrivacy from '@/utils/icon/iconPrivacy'
import AppContainer from '../container'
import tag from '../tag/tag'

const Footer = () => {
  return (
    <AppContainer>
      <div className='h-footer bg-footer text-header px-[64px] py-[32px] flex flex-row justify-between'>
        <div className='flex flex-col gap-[32px] items-start'>
          <div>
            <Link href='/'>
              <Image src={LOGO} alt='Động truyện' width={65} height={32} />
            </Link>
          </div>
          <div className='flex flex-col gap-[8px] items-start'>
            <div className='text-[16px]'>Email: nguyencaohainam@gmail.com</div>
            <button className='flex flex-row gap-[8px] rounded-[8px] bg-white px-[16px] py-[8px]'>
              <iconPrivacy />
              <div className='text-black text-[14px] font-medium'>Chính sách bảo mật</div>
            </button>
          </div>
        </div>
        <div className='flex flex-col gap-[16px] items-start'>
          <div className='flex flex-row gap-[8px]'>
            <div className='text-[14px] text-black text-left leading-[24px] rounded-[8px] px-[12px] py-[2px] bg-white w-fit'>Truyện Tranh</div>
            <div className='text-[14px] text-black text-left leading-[24px] rounded-[8px] px-[12px] py-[2px] bg-white w-fit'>Truyện Tranh</div>
          </div>
          <div className='text-[14px w-[667px] text-left leading-[24px]'>Mọi thông tin và hình ảnh trên website đều được sưu tầm trên Internet. Chúng tôi không sở hữu hay chịu trách nhiệm bất kỳ thông tin nào trên web này. Nếu làm ảnh hưởng đến cá nhân hay tổ chức nào, khi được yêu cầu, chúng tôi sẽ xem xét và gỡ bỏ ngay lập tức.</div>
        </div>
      </div>
    </AppContainer>
  )
}

export default Footer
