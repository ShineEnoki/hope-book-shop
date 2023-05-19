import React, { useState } from "react";

import axios from "axios";
import BookCard from "@/components/BookCard";
//image
import bg2 from '../../public/assets/bg2.png';

//icons
import { AiOutlineSearch } from 'react-icons/ai';
import { BsFillCartCheckFill } from 'react-icons/bs';
import Image from "next/image";
const Main = () => {

    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_BOOKS_API_KEY;

    const [search, setSearch] = useState("");

    const [bookData, setData] = useState([]);

    const [sidebarOpen, setSidebarOpen] = useState(false);

    const searchBook = () => {
        axios.get('https://www.googleapis.com/books/v1/volumes?q=' + search + `&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU` + '&maxResults=40')
            .then(res => setData(res.data.items))
            .catch(err => console.log(err))
    }

    const handleKeypressOnSearchBox = (evt) => {
        if (evt.key === 'Enter') {
            searchBook();
        }
    }

    const handleClickonSearchIcon = () => {
        searchBook();
    }

    const handleCartIconClick = () => {
        setSidebarOpen(true)
    }

    return (
        <>
            {/* Cart */}
            <div className="flex justify-end w-[90%] mx-auto p-3 ">
                <div 
                    className="text-3xl text-secondary  "
                    onClick={handleCartIconClick}
                >
                    <BsFillCartCheckFill />
                </div>
            </div>

            <div className="header">

                <div className="row1">
                    <h1>A room without books is like<br /> a body without a soul.</h1>
                </div>
                <div className="row2">
                    <h2>Find Your Book</h2>
                    <div className="search ">
                        <input
                            type="text" placeholder="Enter Your Book Name"
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            onKeyPress={handleKeypressOnSearchBox} />
                        <button onClick={handleClickonSearchIcon}>
                            <AiOutlineSearch />
                        </button>
                    </div>
                    <Image src={bg2} className="hidden lg:block" alt="" />
                </div>
            </div>

            <div className="container">
                {
                    // <BookCard book={bookData} />
                    bookData.map(book =>
                        <BookCard book={book} key={book.id} />
                    )
                }
            </div>
        </>
    )
}
export default Main;