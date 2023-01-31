import React from 'react'
import { FiMenu } from 'react-icons/fi'
import { CgAdidas } from 'react-icons/cg'
import { BiHeart } from 'react-icons/bi'
import Link from 'next/link'

function Menu(props) {

    const handleEnter = () => props.visible(true)

    const handleLeave = () => props.visible(false)

    return (
        <>
            <Link href={'/'} className='hidden sm:flex'><CgAdidas size={60} /></Link>
            <div className={'py-4 sm:pl-28 '}>
                <ul className={'sm:flex flex-row space-x-7 hidden'}>
                    <li>
                        <button onMouseEnter={handleEnter} onMouseLeave={handleLeave} className={`font-semibold font-Rubik text-sm `}><Link href={'/Men'} >MEN</Link></button>
                    </li>
                    <li>
                        <button onMouseEnter={handleEnter} onMouseLeave={handleLeave} className='font-semibold font-Rubik text-sm'>WOMEN</button>
                    </li>
                    <li>
                        <button onMouseEnter={handleEnter} onMouseLeave={handleLeave} className='font-semibold font-Rubik text-sm'>KIDS</button>
                    </li>
                    <li>
                        <button onMouseEnter={handleEnter} onMouseLeave={handleLeave} className='font-Rubik text-sm'>SPORTS</button>
                    </li>
                    <li>
                        <button onMouseEnter={handleEnter} onMouseLeave={handleLeave} className='font-Rubik text-sm'>BRANDS</button>
                    </li>
                    <li>
                        <button onMouseEnter={handleEnter} onMouseLeave={handleLeave} className='font-Rubik text-sm'>COLLECTIONS</button>
                    </li>
                    <li>
                        <button onMouseEnter={handleEnter} onMouseLeave={handleLeave} className='font-semibold font-Rubik text-sm text-red-600 '>OUTLET</button>
                    </li>
                </ul>
            </div>

        </>
    )
}

export default Menu