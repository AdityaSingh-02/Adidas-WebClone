import React from 'react'
import Menu from './Menu';
import UserActions from './UserActions';

function MainNavbar(props) {
  return (
    <>
      {!props.isOpen && <div className={'sm:h-20 bg-white h-36 px-10 flex sm:w-screen w-[840px] border border-b-1 items-end sm:justify-between '}>
        <Menu />
        <UserActions />
      </div>}
    </>
  )
}

export default MainNavbar