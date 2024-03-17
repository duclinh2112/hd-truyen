import 'swiper/css'
import 'swiper/css/pagination'

import React from 'react'
import { A11y, Pagination, Scrollbar } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { SLIDER_BANNER } from '@/utils/data'
import ImageWrap from '@/views/ui/img-wrap'

const SliderBanner = () => {
  return (
    <div className='w-full bg-black py-[32px]'>
      <Swiper
        spaceBetween={0}
        slidesPerView={1.5}
        centeredSlides
        roundLengths
        loop={true}
        pagination={{
          el: `#pagination`,
          clickable: true,
          bulletActiveClass: 'bullet-active',
        }}
        modules={[Pagination, Scrollbar, A11y]}
        keyboard={{
          enabled: true,
        }}
      >
        {SLIDER_BANNER.map((item) => (
          <SwiperSlide key={item.id}>
            <ImageWrap src={item.image} borderRadius='16px' />
          </SwiperSlide>
        ))}
      </Swiper>
      <div id='pagination'></div>
    </div>
  )
}

export default SliderBanner
