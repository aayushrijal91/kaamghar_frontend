import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    async function handleFormSubmit(e) {
        e.preventDefault();

        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/local/register`,
            {
                method: "POST",
                headers: {
                    "Accept": 'application/json',
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                },
                body: JSON.stringify({
                    "username": username,
                    "email": email,
                    "password": password
                })
            });

        if (!res.ok) {
            // Check if the response status code indicates an authentication failure
            if (res.status === 401 || res.status === 403 || res.status === 400) {
                throw new Error('Authentication failed');
            } else {
                // Handle other HTTP errors here
                throw new Error('Failed to fetch data');
            }
        } else {
            // const user = await res.json();

            router.push('/login');
        }
    }

    return (
        <main className="py-5">
            <div className="container">
                <div className="flex justify-center gap-x-4">
                    <div className="w-1/4">
                        <div className="flex flex-col gap-y-3">
                            <div className="bg-white border w-full p-5 rounded-lg">
                                <form onSubmit={handleFormSubmit} className="flex gap-y-3 flex-col">
                                    <div>
                                        <input
                                            className="border w-full h-[40px] outline-none px-3 rounded-md"
                                            type="text"
                                            value={username}
                                            placeholder="Username"
                                            onChange={e => setUsername(e.target.value)}
                                            required />
                                    </div>
                                    <div>
                                        <input
                                            className="border w-full h-[40px] outline-none px-3 rounded-md"
                                            type="email"
                                            value={email}
                                            placeholder="Email"
                                            onChange={e => setEmail(e.target.value)}
                                            required />
                                    </div>
                                    <div>
                                        <input
                                            className="border w-full h-[40px] outline-none px-3 rounded-md"
                                            type="password"
                                            value={password}
                                            placeholder="Password"
                                            onChange={e => setPassword(e.target.value)}
                                            required />
                                    </div>
                                    <button type="submit" className="bg-primary text-white h-[50px] rounded-md">Register</button>
                                </form>
                            </div>

                            <p className="text-center text-gray-400 font-bold">If you have already signed up, <Link href="/login" className="text-sky-500">Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Register;