import React, { useState } from 'react'
import Modal from './Modal';
import Image from 'next/image';
//icons
import { GoEye } from 'react-icons/go'
import { IoMdAddCircle } from 'react-icons/io'
const BookCard = ({ book }) => {

    const [show, setShow] = useState(false);

    const thumbnail = book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail;

    const amount = book.saleInfo.listPrice && book.saleInfo.listPrice.amount;

    console.log(amount);

    if (thumbnail === undefined || amount === undefined) {
        return null; // Return null to render nothing
      }

    return (
        <div className=''>

            {thumbnail !== undefined && amount !== undefined && (
                <div className=''>
                    <div className="card relative group" >

                        <div className=' hidden absolute top-4 right-[20px] text-3xl text-primary group-hover:flex flex-col gap-2 transition duration-500'>
                            <div className='' onClick={() => setShow(true)}>
                                <GoEye />
                            </div>
                            <div>
                                <IoMdAddCircle />
                            </div>
                        </div>

                        {/* BOOK COVER */}
                        <Image
                            src={thumbnail}
                            alt="" 
                            height={150}
                            width={100}
                            className='mx-auto'
                        />

                        {/* TITLE AND PRICE */}
                        <div className="bottom">
                            <h3 className="title">{book.volumeInfo.title}</h3>
                            <p className="amount">&#8377;{amount}</p>
                        </div>
                    </div>
                    <Modal show={show} item={book} onClose={() => setShow(false)} />
                </div>
            
            ) 
        }
        </div>

    )
}

export default BookCard;