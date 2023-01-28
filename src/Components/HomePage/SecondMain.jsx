import React from 'react'
import Image from 'next/image'
import { BsArrowRight } from 'react-icons/bs'

function SecondMain() {
  return (
    <>
        <div className='w-screen flex h-[90vh]'>
            <div className='w-[55%] bg-black pl-16 flex flex-col justify-center text-white font-Rubik'>
                <h1 className='text-6xl font-serif pb-6 pl-5'>Stan Smith</h1>
                <p>Reborn for a generation that refuses to play by the rules.</p><p> Welcome to a new era.</p>
                <button className='flex bg-white text-sm font-semibold text-black w-[170px] px-5 py-3 justify-between mt-5'>SHOP NOW <BsArrowRight size={25} /></button>
            </div>
            <div className=''>
                <Image src={'/SecondMain.png'} width={800} height={400} />
            </div>
        </div>
    </>
  )
}

export default SecondMain