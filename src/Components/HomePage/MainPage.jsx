import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function MainPage() {
    return (
        <>
            <div className='w-screen flex md:flex-row flex-col-reverse'>
                <div className='md:w-[50%] w-[217vw] bg-[#f04b4f] h-[762px] pl-16 flex justify-center flex-col text-white'>
                    <h1 className='font-Rubik md:text-[39px] text-5xl md:pb-1 pb-3 font-bold'>FLAT 40% OFF</h1>
                    <h2 className='md:text-xl text-6xl md:pb-3 pb-6'>END OF SEASON SALE</h2>
                    <span className='flex flex-col items-start font-bold md:text-[15px] text-3xl underline md:space-y-3 space-y-7'>
                        <Link href="/Men" className='transition duration-300 ease-in-out hover:bg-white hover:text-black'>SHOP MEN</Link>
                        <button className='transition duration-300 ease-in-out hover:bg-white hover:text-black'>SHOP WOMEN</button>
                        <button className='transition duration-300 ease-in-out hover:bg-white hover:text-black'>SHOP KIDS</button>
                    </span>
                </div>
                <div className='md:w-[50%] w-[217vw]'>
                    <Image src={'/MainPageImg.png'} placeholder='empty' width={2000} height={490} />
                </div>
            </div>
        </>
    )
}

export default MainPage