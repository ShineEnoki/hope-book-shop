import React from 'react'

const Footer = () => {
    return (
        <div className='w-full h-[100px] bg-primary text-secondary flex justify-center items-center  rounded border-t-2 border-secondary z-30'>
            <div className='text-2xl flex flex-row gap-2 items-center'>
                <p> Contact me via </p>
                <p className='text-xl text-white'> thuriyac4@gmail.com </p>
            </div>
        </div>
    )
}

export default Footer;