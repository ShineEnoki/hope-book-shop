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

    return (
        <div>
            <main>
                {/* Cart */}
                <div className="flex justify-end w-[90%] mx-auto p-3 ">
                    <div
                        className="text-3xl text-secondary  "
                        onClick={handleCartIconClick}
                    >
                        <BsFillCartCheckFill />
                    </div>
                </div>

                {/* Warn context */}
                <div className="w-[100vw]">
                    <div className="marquee animate-marquee text-3xl text-secondary"> Use VPN to bypass country </div>
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