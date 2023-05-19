import React, { useContext } from 'react'
import { SIdebarContext } from '../../context/SidebarContext'
//icons
import { BsArrowRight } from 'react-icons/bs'
const Sidebar = () => {
    const { isSidebarOpen, handleClose } = useContext(SIdebarContext)
    return (
        <div className={` ${isSidebarOpen ? 'right-0' : '-right-full'} bg-secondary w-full md:w-[35vw] xl:w-[30vw] h-full fixed top-0 transition duration-300 p-3 `}>
            <div className='flex flex-row justify-between items-center text-primary'

            >
                <div className='uppercase text-sm font-semibold'>
                    Book Cart
                </div>
                <div 
                    onClick={handleClose}
                    className='cursor-pointer text-3xl'
                >
                    <BsArrowRight  />
                </div>
            </div>
            Sidebar
        </div>
    )
}

export default Sidebar