import Head from "next/head";
import Link from "next/link";
import { selectUser } from "@/features/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { logout } from "@/features/userSlice";

const Header = ({
    meta = {
        seo_title: "KaamGhar",
        meta_description: "KaamGhar",
        keywords: "KaamGhar"
    }
}) => {
    const dispatch = useDispatch();
    const router = useRouter();

    const user = useSelector(selectUser);

    const handleLogout = () => {
        dispatch(logout());

        router.push('/login');
    }

    return (
        <>
            <Head>
                <title>{meta.seo_title}</title>
                <meta name="description" content={meta.meta_description} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="keywords" content={meta.keywords} />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header className="bg-white border-b">
                <nav className=" py-5">
                    <div className="container">
                        <div className="flex justify-between">
                            <div className="w-fit">
                                <Link href="./">KaamGhar</Link>
                            </div>
                            <div className="w-fit">
                                <ul>
                                    <li>
                                        {/* <Link href="/create-post">Create Post</Link> */}
                                    </li>
                                </ul>
                            </div>
                            <div className="w-fit">
                                {!user ? (
                                    <Link href="/login">Login</Link>
                                ) : (
                                    <button onClick={handleLogout}>Logout</button>
                                )}
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Header;