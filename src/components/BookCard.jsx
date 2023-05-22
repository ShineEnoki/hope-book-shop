import React, { useState } from 'react'

import Image from 'next/image';
//icons
import { GoEye } from 'react-icons/go'
import { IoMdAddCircle } from 'react-icons/io'
import { useRouter } from 'next/router';
const BookCard = ({ book }) => {
    const router = useRouter();

    const thumbnail = book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail;

    const amount = book.saleInfo.listPrice && book.saleInfo.listPrice.amount;


    if (thumbnail === undefined || amount === undefined) {
        return null; // Return null to render nothing
    }

    return (
        <div className='card bg-secondary min-w-[210px]'>

            {
                thumbnail !== undefined && amount !== undefined && (
                    <div className=''>
                        <div className="min-h-[200px] group flex flex-col justify-between gap-y-2 h-full " >
                            <div className=' hidden absolute top-4 right-[20px] text-3xl group-hover:flex flex-col gap-2 transition duration-500'>

                                <div 
                                    className='text-primary' 
                                    onClick={() => router.push(`/book/${book.id}`)}
                                >
                                    <GoEye />
                                </div>
                                {/* <div>
                                    <IoMdAddCircle />
                                </div> */}
                            </div>

                            {/* BOOK COVER */}
                            <div className='group-hover:mr-auto transition duration-1000'>
                                <Image
                                    src={thumbnail}
                                    alt=""
                                    height={150}
                                    width={100}
                                    className='mx-auto'
                                />
                            </div>


                            {/* TITLE */}
                            <div className="bottom">
                                <h3 className="title">{book.volumeInfo.title}</h3>
                            </div>

                            {/* price */}
                            <div className='flex items-end justify-center mt-auto '
                            >
                                <p className=" w-[100px] px-3 py-2 bg-primary rounded-lg text-center">$ {amount}</p>
                            </div>

                        </div>

                    </div>
                )
            }
        </div>

    )
}

export default BookCard;