import React, { useState } from 'react'
import Modal from './Modal';
import Image from 'next/image';
const BookCard = ({ book }) => {

    const [show, setShow] = useState(false);
    const [bookItem, setItem] = useState();

    const thumbnail = book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail;
    const amount = book.saleInfo.listPrice && book.saleInfo.listPrice.amount;

    return (
        <>

            {thumbnail !== undefined && amount !== undefined && (
                <>
                    <div className="card" onClick={() => setShow(true)}>
                        <Image 
                            src={thumbnail} 
                            alt="" height={200} 
                            width={200} 
                            className='mx-auto'
                        />
                        <div className="bottom">
                            <h3 className="title">{book.volumeInfo.title}</h3>
                            <p className="amount">&#8377;{amount}</p>
                        </div>
                    </div>
                    <Modal show={show} item={book} onClose={() => setShow(false)} />
                </>
            )}
        </>
    )
}

export default BookCard