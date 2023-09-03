import { login } from "@/features/userSlice";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch } from "react-redux";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const router = useRouter();

    async function handleFormSubmit(e) {
        e.preventDefault();

        try {
            const res = await fetch('http://localhost:1337/api/auth/local',
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*",
                    },
                    body: JSON.stringify({
                        "identifier": username,
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
                const user = await res.json();

                dispatch(login({
                    jwt: user.jwt,
                    id: user.user.id,
                    username: user.user.username,
                    email: user.user.email,
                    createdAt: user.user.createdAt,
                    updatedAt: user.user.updatedAt,
                    confirmed: user.user.confirmed,
                    blocked: user.user.blocked,
                    provider: user.user.provider,
                }));

                router.push('/create-post');
            }
        } catch (e) {
            alert(`Login error: ${e.message}`);
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
                                            type="password"
                                            value={password}
                                            placeholder="Password"
                                            onChange={e => setPassword(e.target.value)}
                                            required />
                                    </div>
                                    <button type="submit" className="bg-primary text-white h-[50px] rounded-md">Login</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Login;