import React from 'react'

const Footer = () => {
    return (
        <div className='fixed bottom-0 w-full h-[100px] bg-secondary text-primary flex justify-center items-center  rounded'>
            <div className='text-2xl flex flex-row gap-2 items-center'>
                <p> Contact me via </p>
                <p className='text-xl text-white'> thuriyac4@gmail.com </p>
            </div>
        </div>
    )
}

export default Footer