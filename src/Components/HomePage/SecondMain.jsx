import React from 'react'
import Image from 'next/image'
import { BsArrowRight } from 'react-icons/bs'

function SecondMain() {
  return (
    <>
        <div className='md:w-screen w-[217vw] flex md:h-[90vh] flex-col-reverse md:flex-row'>
            <div className='md:w-[55%] w-[217vw] bg-black pl-16 flex flex-col justify-center text-white font-Rubik'>
                <h1 className='md:text-6xl text-[70px] font-serif pb-6 pl-5'>Stan Smith</h1>
                <p className='text-3xl'>Reborn for a generation that refuses to play by the rules.</p><p> Welcome to a new era.</p>
                <button className='flex bg-white text-sm font-semibold text-black w-[170px] px-5 py-3 justify-between mt-5'>SHOP NOW <BsArrowRight size={25} /></button>
            </div>
            <div className='bg-black md:bg-none flex justify-center '>
                <Image src={'/SecondMain.png'} width={800} height={400} />
            </div>
        </div>
    </>
  )
}

export default SecondMain