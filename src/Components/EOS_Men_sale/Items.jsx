import React, { useState } from 'react'
import Image from 'next/image'

function Items({ id, name, Price, ImageURI, category, HoverImg, orgPrice, colorRange }) {

    const [hover, setHover] = useState(false)
// Managing Image Structure and How Things needs to be displayed
    return (
        <>
            <div className=''>
                <Image src={!hover ? ImageURI : HoverImg} loading='lazy' onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} alt='Image/Shoes' width={600} height={800} className={`z-10`} />
                <div className={`flex space-x-3 items-center justify-center  w-32 ml-1 border-none bg-white text-[14px] font-Rubik font-thin transition-all transform duration-100 ease-in ${hover?'-translate-y-[28.5px]':'-translate-y-[21.5px]'} `}>
                    <p className='line-through'>{orgPrice}</p>
                    <p className='text-red-500'>{Price}</p>
                </div>
                <div className='pl-3 space-y-1 pb-3 '>   
                    <p className='font-Rubik font-thin text-[15px]'>{name}</p>
                    <p className='text-xs font-Rubik font-thin text-gray-600'>{category}</p>
                    <p className='text-xs font-Rubik font-thin text-gray-600'>{colorRange}</p>
                </div>
            </div>
        </>
    )
}

export default Items