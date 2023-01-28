import React, { useState } from 'react';
import UpperNav from './UpperNav';
import MainNavbar from './MainNavbar/MainNavbar';

function Navbar() {
  const [isOpen , setIsOpen] = useState(false)
  return (
    <>
        <nav className=''>
            <UpperNav isOpen = {isOpen} setIsOpen={setIsOpen} />
            <MainNavbar isOpen ={isOpen} />
        </nav>
    </>
  )
}

export default Navbar