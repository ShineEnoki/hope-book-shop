import '@/styles/globals.css';
import { SIdebarContextProvider } from '../../context/SidebarContext';
import { CartContextProvider } from '../../context/CartContext';


export default function App({ Component, pageProps }) {
    return (
        <CartContextProvider >
            <SIdebarContextProvider >
                <Component {...pageProps} />
            </SIdebarContextProvider>
        </CartContextProvider>
    )
}
