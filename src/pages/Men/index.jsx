import React from 'react'
import Navbar from '@/Components/Navbar/Navbar'
import Image from 'next/image'
import MenSale from '@/Components/EOS_Men_sale/EOS_SALE'
import { useState, useEffect } from 'react'

// const ImageURI = 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a9153313324447daa47daed701513b19_9366/EQ21_Run_Shoes_Grey_GY2195_01_standard.jpg'

function Index() {
  const [hideNavbar, setHiddenNavbar] = useState(false);

  useEffect(() => {
    let prevScroll = window.scrollY;
    window.onscroll = () => {
      let currScroll = window.scrollY;
      if (currScroll > prevScroll) {
        setHiddenNavbar(true)
      } else {
        setHiddenNavbar(false)
      }
      prevScroll = currScroll
    }
  }, [])
  return (
    <>
      <div className={`md:fixed md:h-40 transition-all ease-in duration-300 delay-300 ${hideNavbar ? '-translate-y-44' : ''} `}>
        <Navbar />
      </div>
      <div className='md:w-screen w-[850px]'>
        <MenSale />
      </div>
    </>
  )
}

export default Index
