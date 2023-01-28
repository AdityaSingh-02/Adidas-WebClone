import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai'
import { BiUser } from 'react-icons/bi'
import { BiHeart } from 'react-icons/bi';
import { SlBag } from 'react-icons/sl'
import { FiMenu } from 'react-icons/fi'
import { CgAdidas } from 'react-icons/cg'
// import { BiHeart } from 'react-icons/bi'


const fakeUserInteractApi = [
  {
    id: '1',
    title: 'help',
  },
  {
    id: '2',
    title: 'returns',
  },
  {
    id: '3',
    title: 'order tracking',
  },
  {
    id: '4',
    title: 'sign up',
  },
  {
    id: '5',
    title: 'log in',
  },
]

function UserActions() {
  return (
    <>
      <div className='sm:w-fit w-full '>
        <div className='sm:flex pl-7 hidden'>
          <ul className='sm:flex flex-row space-x-4 font-Rubik font-thin hidden '>
            {fakeUserInteractApi.map(({ id, title }) => (
              <li key={id}>
                <button className='text-xs hover:underline'>{title}</button>
              </li>
            ))}
          </ul>
        </div>
        <div className='md:flex space-x-4 hidden'>
          <form >
            <input type="text" placeholder='Search' className={'bg-gray-200 w-[12rem] mb-2 px-2 py-2 placeholder-black placeholder:font-thin text-sm items-center placeholder:font-Rubik focus:outline-none'} />
            <button className='bg-gray-200 pt-[0.4rem] -z-10 pb-1 translate-y-[9px]'><AiOutlineSearch size={25} /></button>
          </form>
          <div className={'sm:flex hidden pt-4 space-x-6'}>
            <BiUser size={20} />
            <BiHeart size={20} />
            <SlBag size={20} />
          </div>
        </div>
        <div className='w-[100%]'>
          <div className='sm:hidden py-4 flex justify-between'>
            <div className='flex space-x-10 left-0'>
              <button ><FiMenu size={60} /></button>
              <button><BiHeart size={60} /></button>
            </div>
            <div className='flex mx-auto items-center'>
              <button><CgAdidas size={100} /></button>
            </div>
            <div className='flex space-x-10 pt-4'>
              <BiUser size={50} />
              <AiOutlineSearch size={50} />
              <SlBag size={50} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserActions