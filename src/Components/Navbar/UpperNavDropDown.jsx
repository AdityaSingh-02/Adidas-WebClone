import React from 'react'
import { RxCross1 } from 'react-icons/rx'

function UpperNavDropDown(props) {

  const closeMenu = e => {
    e.preventDefault();
    props.setOpen(prev => !prev)
  }

  return (
    <>
      {props.isOpen && <div className='transition-all transform ease-in duration-300'>
        <div>
          <button onClick={closeMenu}><RxCross1 size={30} /></button>
        </div>
        <div className='w-full grid grid-cols-3 gap-16 text-sm font-Rubik bg-gray-100 h-[40vh] px-6 items-center '>
          <div>
            <h1 className='font-semibold  '>SIGN UP & GET 15% OFF</h1>
            <p>Members get more! Like a 15% discount voucher, early access to the sale and access to limited edition products. Sign up now!</p>
          </div>
          <div>
            <h1 className='font-semibold '>FREE DELIVERY</h1>
            <p>For all orders, shipping is offered for free.
              Check out our delivery Terms & Conditions for more details.</p>
          </div>
          <div>
            <h1 className='font-semibold '>UPI & NET BANKING AVAILABLE</h1>
            <p>UPI & NET BANKING AVAILABLE</p>
          </div>
        </div>
      </div>}
    </>
  )
}

export default UpperNavDropDown