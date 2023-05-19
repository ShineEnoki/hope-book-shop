import '@/styles/globals.css';
import { SIdebarContextProvider } from '../../context/SidebarContext';


export default function App({ Component, pageProps }) {
    return (
        <SIdebarContextProvider >
            <Component {...pageProps} />
        </SIdebarContextProvider>
    )
}
