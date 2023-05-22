import React, { useContext } from 'react'

//icons
import { BsFillCartCheckFill } from 'react-icons/bs';

import { CartContext } from '../../contexts/CartContext';

const Nav = () => {

    const { handleCartIconClick } = useContext(CartContext)
    return (
        <div>
            {/* Nav */}
            <div className="flex  bg-primary justify-between w-full fixed top-0 z-[29] p-3 ">
                <div className="flex flex-row w-[95%] md:w-[80%] text-white">
                    {/* Warn context */}
                    <div className="w-[100vw] overflow-hidden flex justify-start">
                        <p
                            className="marquee text-3xl "
                        > Use VPN to bypass country </p>

                    </div>

                    {/* CART */}
                    <div
                        className="text-3xl cursor-pointer "
                        onClick={handleCartIconClick}
                    >
                        <BsFillCartCheckFill />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Nav