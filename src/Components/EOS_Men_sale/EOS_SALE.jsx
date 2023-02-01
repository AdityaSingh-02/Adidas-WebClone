import React from 'react';
import { IoReturnUpBackSharp } from 'react-icons/io5'
import Link from 'next/link';
import { useRouter } from 'next/router';
import Layout from './Layout';

function MenSale() {
    const router = useRouter();
    
    return (
        <>
            <div className='md:w-[100%] w-[840px] md:px-16 px-3 md:pt-36 pt-12 '>
                <span className='md:flex hidden space-x-3 pb-7'>
                    <button onClick={()=>router.push('/')} className='flex font-semibold hover:bg-black hover:text-white underline transform ease-in duration-200'><IoReturnUpBackSharp />BACK</button>
                    <button className=' hover:bg-black hover:text-white underline transform ease-in duration-200 '>Home / </button>
                    <button className=' hover:bg-black hover:text-white underline transform ease-in duration-200'>Men / </button>
                    <button className=' hover:bg-black hover:text-white transform ease-in duration-200 '>EOSS</button>
                </span>
                <h1 className='pb-9 font-Rubik md:text-4xl text-6xl'><i>MEN · END OF SEASON SALE (EOSS)</i></h1>
                <Layout />
            </div>
        </>
    )
} 

export default MenSale