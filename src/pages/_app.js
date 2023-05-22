import '@/styles/globals.css';
import { SIdebarContextProvider } from '../../contexts/SidebarContext';
import { CartContextProvider } from '../../contexts/CartContext';
import { BooksContextProvider } from '../../contexts/booksContext';


export default function App({ Component, pageProps }) {
    return (
        <BooksContextProvider >
            <CartContextProvider >
                <SIdebarContextProvider >
                    <Component {...pageProps} />
                </SIdebarContextProvider>
            </CartContextProvider>
        </BooksContextProvider>
    )
}
