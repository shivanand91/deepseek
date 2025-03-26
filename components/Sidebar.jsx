'use client'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import React from 'react'

const Sidebar = ({expand, setExpand}) => {
  return (
      <div className={`flex flex-col justify-between bg-[#212327] pt-7 transition-all z-50 max-md:absolute max-m:h-screen ${expand ? 'w-60 p-4' : 'md:w-20 w-0 max-md:overflow-hidden'}`}>
          <div>
              <div className={`flex ${expand ? 'flex-row gap-10' : 'flex-col items-center gap-8'} items-center`}>
                  <Image src={expand ? assets.logo_text : assets.logo_icon} />
                  
                  <div>
                      
                  <Image src={assets.menu_icon} className='md:hidden' />
                  <Image src={expand ? assets.sidebar_close_icon : assets.search_icon} className='hidden md:block w-7' />
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Sidebar