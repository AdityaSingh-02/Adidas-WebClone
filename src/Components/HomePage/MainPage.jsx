import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function MainPage() {
    return (
        <>
            <div className='w-screen flex'>
                <div className='w-[50%] bg-[#f04b4f] h-[762px] pl-16 flex justify-center flex-col text-white'>
                    <h1 className='font-Rubik text-[39px] pb-1 font-bold'>FLAT 40% OFF</h1>
                    <h2 className='text-xl pb-3'>END OF SEASON SALE</h2>
                    <span className='flex flex-col items-start font-bold text-[15px] underline space-y-3'>
                        <Link href="/Men" className='transition duration-300 ease-in-out hover:bg-white hover:text-black'>SHOP MEN</Link>
                        <button className='transition duration-300 ease-in-out hover:bg-white hover:text-black'>SHOP WOMEN</button>
                        <button className='transition duration-300 ease-in-out hover:bg-white hover:text-black'>SHOP KIDS</button>
                    </span>
                </div>
                <div className='w-[50%]'>
                    <Image src={'/MainPageImg.png'} placeholder='empty' width={2000} height={490} />
                </div>
            </div>
        </>
    )
}

export default MainPage