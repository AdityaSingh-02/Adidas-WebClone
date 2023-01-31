import React, { useState } from 'react'
import Image from 'next/image'

function Items({ id, name, Price, ImageURI, category, HoverImg, orgPrice, colorRange }) {

    const [hover, setHover] = useState(false)
// Managing Image Structure and How Things needs to be displayed
    return (
        <>
            <div className=''>
                <Image src={!hover ? ImageURI : HoverImg} loading='lazy' onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} alt='Image/Shoes' width={600} height={800} className={`z-10`} />
                <div className={`flex md:space-x-3 space-x-1 items-center justify-center md:w-32 w-60 md:ml-1 border-none bg-white md:text-[14px] text-3xl font-Rubik md:font-thin font-semibold transition-all transform duration-100 ease-in ${hover?'-translate-y-[28.5px]':'-translate-y-[21.5px]'} `}>
                    <p className='line-through'>{orgPrice}</p>
                    <p className='text-red-500'>{Price}</p>
                </div>
                <div className='pl-3 md:space-y-1 space-y-3 pb-3 '>   
                    <p className='font-Rubik md:font-thin font-normal md:text-[15px] text-4xl'>{name}</p>
                    <p className='md:text-xs text-3xl font-Rubik font-thin text-gray-600'>{category}</p>
                    <p className='md:text-xs text-2xl font-Rubik font-thin text-gray-600'>{colorRange}</p>
                </div>
            </div>
        </>
    )
}

export default Items