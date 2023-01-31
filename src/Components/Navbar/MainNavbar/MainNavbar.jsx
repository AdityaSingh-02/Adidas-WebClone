import React, { useState } from 'react'
import Menu from './Menu';
import UserActions from './UserActions';
import MenHover from './hoverActions/MenHover';

function MainNavbar(props) {

  const [hover , setHover] = useState(false)

  return (
    <>
      {!props.isOpen && <div className={'sm:h-20 bg-white h-36 px-10 flex md:w-screen w-[840px] border border-b-1 items-end sm:justify-between '}>
        <Menu visible={setHover} />
        <UserActions />
      </div>}
      {hover&& <MenHover />}
    </>
  )
}

export default MainNavbar