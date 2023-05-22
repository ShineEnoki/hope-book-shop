import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';
import { BooksContext } from '../../../contexts/booksContext';
import Image from 'next/image';

//icons
import { BsArrowLeft } from 'react-icons/bs'
import Link from 'next/link';

const Book = () => {
    const router = useRouter();
    const { id } = router.query;
    const { books } = useContext(BooksContext);

    const [thumbnail, setThumbnail] = useState('')

    const [book, setBook] = useState({});


    useEffect(() => {
        const searchTargetBookById = (id) => {
            const targetBook = books.find((book) => book.id === id);
            if (targetBook) {
                setBook(targetBook);
                setThumbnail(targetBook.volumeInfo.imageLinks.thumbnail);
            }
        };
        searchTargetBookById(id)
    }, [id, books])

    console.log(book)

    return (
        <div className='h-screen'>
            <div className='w-full h-[50px] flex items-center border-b border-secondary'>
                <div className='text-3xl text-secondary'>
                    <Link href={'/'} >
                        <BsArrowLeft  />
                    </Link>
                </div>
            </div>
            <div className='flex justify-center items-center mt-[100px]'>
                {
                    book.volumeInfo && (<div className=' flex flex-col p-2 rounded-lg gap-x-4 gap-y-8 w-[95%] items-center mx-auto'>
                        {/* image */}
                        <div className='mx-auto'>
                            <Image
                                src={thumbnail}
                                alt='product'
                                width={200}
                                height={200}
                                className='rounded-md hover:scale-110'
                            />
                        </div>
                        {/* text */}
                        <div className='text-secondary px-4 flex flex-col'>
                            {/* title */}
                            <div className='flex flex-col items-center gap-x-2 my-2'>
                                {/* name */}
                                <p className='text-2xl font-bold  uppercase'> {book.volumeInfo?.title} </p>

                                <p> by </p>
                                {/*author  */}
                                <p className='text-xl font-bold'> {book.volumeInfo?.authors[0]} </p>
                            </div>

                            {/* Price */}
                            <div className='flex flex-row items-center'>
                                <p className='text-lg font-bold'> Price:  </p>
                                <p> $ {book.saleInfo.listPrice.amount} </p>
                            </div>

                            {/* Description */}
                            <p className=' text-lg md:text-xl'>{book.volumeInfo?.description}</p>




                        </div>
                    </div>
                    )
                }
            </div>
        </div>
    )
}

export default Book;