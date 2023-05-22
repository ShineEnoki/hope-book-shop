import React, { useState, useContext } from "react";
import BookCard from "@/components/BookCard";
//image
import bg2 from '../../public/assets/bg2.png';
//icons
import { AiOutlineSearch } from 'react-icons/ai';
//components
import Image from "next/image";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
//contexts
import { BooksContext } from "../../contexts/booksContext";
import { SIdebarContext } from "../../contexts/SidebarContext";

const Main = () => {

    const [search, setSearch] = useState("");

    const [bookData, setData] = useState([]);

    const { isSidebarOpen, setIsSidebarOpen } = useContext(SIdebarContext)

    const { books, searchBook } = useContext(BooksContext)

    const handleKeypressOnSearchBox = (evt) => {
        if (evt.key === 'Enter') {
            searchBook(search);
        }
    }

    const handleClickonSearchIcon = () => {
        searchBook(search);
    }

    const handleCartIconClick = () => {
        setIsSidebarOpen(true)
    }

    return (
        <div>
            <Nav />
            <main className="min-h-screen">
            
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
                <div className="container flex flex-wrap gap-4">
                    {
                        books.map(book =>
                            <BookCard book={book} key={book.id} />
                        )
                    }
                </div>
            </main>

            <Footer />
        </div>
    )
}
export default Main;