import "../styles/global.css";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import { Provider } from "react-redux";
import store from "@/store";
import TimeAgo from "javascript-time-ago";
import en from 'javascript-time-ago/locale/en.json';
// import { usePathname } from 'next/navigation';
TimeAgo.addDefaultLocale(en);

export default function App({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <Header />
            <Component  {...pageProps} />
            <Footer />
        </Provider>
    );
}