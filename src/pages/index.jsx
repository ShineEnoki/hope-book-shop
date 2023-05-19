import React, { useState, useContext } from "react";

import axios from "axios";
import BookCard from "@/components/BookCard";
//image
import bg2 from '../../public/assets/bg2.png';

//icons
import { AiOutlineSearch } from 'react-icons/ai';
import { BsFillCartCheckFill } from 'react-icons/bs';
import Image from "next/image";
import Sidebar from "@/components/Sidebar";
import { SIdebarContext } from "../../context/SidebarContext";
import Footer from "@/components/Footer";
const Main = () => {

    const [search, setSearch] = useState("");

    const [bookData, setData] = useState([]);

    const { isSidebarOpen, setIsSidebarOpen, handleSidebarClose } = useContext(SIdebarContext)

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
        setIsSidebarOpen(true)
    }

    console.log(bookData.length)

    return (
        <div>
            <main>
                {/* Nav */}
                <div className="flex text-white bg-primary justify-between w-full fixed top-0 z-[29] p-3 ">
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


                {/* Header */}
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

                {/* Books */}
                <div className="container">
                    {
                        bookData.map(book =>
                            <BookCard book={book} key={book.id} />
                        )
                    }
                </div>
            </main>
            <Sidebar />

            <Footer />

        </div>
    )
}
export default Main;