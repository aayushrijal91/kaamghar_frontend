import "../styles/global.css";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import { Provider } from "react-redux";
import { persistor, store } from "@/store";
import TimeAgo from "javascript-time-ago";
import en from 'javascript-time-ago/locale/en.json';
// import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
// import { usePathname } from 'next/navigation';
TimeAgo.addDefaultLocale(en);

export default function App({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Header />
                <Component  {...pageProps} />
                <Footer />
            </PersistGate>
        </Provider>
    );
}