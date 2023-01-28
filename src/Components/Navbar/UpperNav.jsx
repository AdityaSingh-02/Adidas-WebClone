import React, { useEffect, useState } from 'react'
import upperNavAPI from './UpperNavAPI';
import { AiOutlineDown } from 'react-icons/ai'
import UpperNavDropDown from './UpperNavDropDown';

function UpperNav(props) {

  let i = 0;
  if (i > 2) {
    i = 0;
  }
  const [currDetail, updtCurrDetails] = useState('FREE RETURN') //Changes Text between return and Multi different texts
  const [count, setCount] = useState(0);

  // Has an Set Interval which calls handleChanges
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
      handleChanges();
    }, 2000)
    return () => clearInterval(interval);
  }, [count, currDetail]);

  // Handles Txt in upper navbar
  function handleChanges() {
    if (count < 3) {
      updtCurrDetails(upperNavAPI.at(count).text);
    } else {
      setCount(0)
    }
  }

  const showMenus = () => {
    props.setIsOpen(prev => !prev)
  }

  return (
    <>
      {!props.isOpen ? <div className={`bg-black text-white sm:w-full z-0 w-[100vh] sm:h-10 h-24 font-Rubik sm:text-xs text-2xl font-semibold flex space-x-4 justify-center cursor-pointer items-center   `} >
        <div onClick={showMenus} className={'flex ease-in-out delay-200'}>{currDetail} <span className='sm:px-5'><AiOutlineDown /></span> </div>
      </div> :
        <div className='translate-y-3 z-30  transition transform ease-in duration-500'>
          <UpperNavDropDown isOpen={props.isOpen} setOpen={props.setIsOpen} />
        </div>}
    </>
  )
}

export default UpperNav