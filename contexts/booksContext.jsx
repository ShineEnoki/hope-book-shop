import { createContext, useState } from "react";

import axios from "axios";

export const BooksContext = createContext();

export const BooksContextProvider = ({children}) => {

    const [ books, setBooks ] = useState([]);

    const searchBook = (search) => {
        axios.get('https://www.googleapis.com/books/v1/volumes?q=' + search + `&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU` + '&maxResults=40')
            .then(res => setBooks(res.data.items))
            .catch(err => console.log(err))
    }

    return(
        <BooksContext.Provider value={{ books, searchBook}} >
            {children}
        </BooksContext.Provider>
    )
}