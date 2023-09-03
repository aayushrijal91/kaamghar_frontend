import { useState } from "react";
import { postQuery } from "@/util";
import { useSelector } from "react-redux";
import { selectUser } from "@/features/userSlice";
import { useRouter } from "next/router";

function CreatePost() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [address, setAddress] = useState("");
    const [postStatus, setPostStatus] = useState(true);

    // get the next router
    const router = useRouter();

    // get the user from userslice - selectUser selector
    const user = useSelector(selectUser);

    async function handleFormSubmit(e) {
        e.preventDefault();

        try {
            let data = {
                "Title": title,
                "Description": description,
                "Address": address,
                "post_status": postStatus
            };

            let res = await postQuery('jobs',
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*",
                    },
                },
                {
                    "data": data
                }
            );

            if (res) {
                setTitle("");
                setDescription("");
                setAddress("");
            }
        } catch (error) {
            console.log(error);
        }
    }

    {
        !user &&
        router.push('/login');
    }

    return (
        <main className="py-5">
            <div className="container">
                <div className="flex justify-center gap-x-4">
                    <div className="w-1/4">
                        <div className="bg-white border w-full p-5 rounded-lg">
                            <p className="text-gray-500">	&#8226; 40 open job posts</p>
                            <p className="text-gray-500">	&#8226; 200 closed job posts</p>
                        </div>
                    </div>

                    <div className="w-2/4">
                        <div className="flex flex-col gap-y-3">
                            <div className="bg-white border w-full p-5 rounded-lg">
                                <form onSubmit={handleFormSubmit} className="flex gap-y-3 flex-col">
                                    <div>
                                        <input
                                            className="border w-full h-[40px] outline-none px-3 rounded-md"
                                            type="text"
                                            value={title}
                                            placeholder="Title"
                                            onChange={e => setTitle(e.target.value)}
                                            required />
                                    </div>

                                    <div>
                                        <input
                                            className="border w-full h-[40px] outline-none px-3 rounded-md"
                                            type="text"
                                            placeholder="Address"
                                            value={address}
                                            onChange={e => setAddress(e.target.value)}
                                            required />
                                    </div>

                                    <div className="flex items-center">
                                        <input
                                            className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-full bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)]"
                                            type="checkbox"
                                            checked={postStatus}
                                            onChange={() => setPostStatus(!postStatus)}
                                            role="switch" />
                                        <label className="pl-4 hover:cursor-pointer text-gray-400 text-sm">Is this post open or closed?</label>
                                    </div>
                                    <div>
                                        <textarea
                                            className="border w-full outline-none p-3 rounded-md"
                                            value={description}
                                            rows="14"
                                            placeholder="Description"
                                            onChange={e => setDescription(e.target.value)}
                                            required />
                                    </div>

                                    <button type="submit" className="bg-primary text-white h-[50px] rounded-md">Post</button>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="w-1/4">
                        <div className="bg-white border w-full p-5 rounded-lg">
                            <p className="text-gray-500">	&#8226; 40 open job posts</p>
                            <p className="text-gray-500">	&#8226; 200 closed job posts</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default CreatePost;