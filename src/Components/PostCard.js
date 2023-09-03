import ReactTimeAgo from "react-time-ago";

function PostCard({ job }) {
    return (
        <div className="bg-white border w-full p-5 pb-7 rounded-lg">
            <div className="flex gap-x-5">
                <div className="w-[50px] h-[50px] rounded-full bg-gray-300"></div>
                <div className="flex-1">
                    <p className="font-bold text-lg">{job.Title}</p>
                    <div className="text-xs text-gray-500 flex gap-x-1 items-center">
                        {job.Address}<span> · </span> Job <span> · </span> <ReactTimeAgo date={Date.parse(job.createdAt)} locale="en" />
                    </div>
                </div>
                <div className="w-fit">
                    <div className={`${job.post_status ? 'bg-green-500' : 'bg-red-500'} h-[10px] w-[10px] rounded-full mr-2`}></div>
                </div>
            </div>
            <article className="text-base pt-4">{job.Description}</article>
        </div>
    );
}

export default PostCard;