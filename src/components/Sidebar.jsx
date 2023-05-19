import React, { useContext } from 'react'
import { SIdebarContext } from '../../context/SidebarContext'
//icons
import { BsArrowRight } from 'react-icons/bs'
import { CartContext } from '../../context/CartContext';
const Sidebar = () => {
    const { isSidebarOpen, handleSidebarClose } = useContext(SIdebarContext);

    const { cart, addBookToCart }  = useContext(CartContext);

    return (
        <div 
            className={` ${isSidebarOpen ? 'right-0' : '-right-full'} bg-primary border-l-2 border-secondary w-full md:w-[35vw] xl:w-[30vw] h-full fixed top-0 transition duration-300 p-3 z-30 text-secondary`}>
            <div 
                className='flex flex-row justify-between items-center '
            >
                <div className='uppercase font-semibold'>
                    Book Cart
                </div>

                {/* CLOSE SIDEBAR ICON */}
                <div 
                    onClick={handleSidebarClose}
                    className='cursor-pointer text-3xl'
                >
                    <BsArrowRight  />
                </div>
            </div>
            
            <div className=''>
                {
                    cart.map((book) => {
                        <div> hello </div>
                    })
                }
            </div>
        </div>
    )
}

export default Sidebar