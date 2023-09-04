import ReactTimeAgo from "react-time-ago";

function PostCard({ job }) {
    return (
        <div className="bg-white border w-full p-5 rounded-lg">
            <div className="flex gap-x-5">
                <div className="w-[50px] h-[50px] rounded-full bg-gray-300"></div>
                <div className="flex-1">
                    <p className="font-bold text-lg">{job.title}</p>
                    <div className="text-xs text-gray-500 flex gap-x-1 items-center">
                        {job.username}<span> · </span>{job.address}<span> · </span> Job <span> · </span> <ReactTimeAgo date={Date.parse(job.createdAt)} locale="en" />
                    </div>
                </div>
                <div className="w-fit">
                    <div className={`${job.post_status ? 'bg-green-500' : 'bg-red-500'} h-[10px] w-[10px] rounded-full mr-2`}></div>
                </div>
            </div>
            <article className="text-base pt-4">{job.description}</article>
            <div className="flex pt-6 gap-4">
                {job?.images?.data?.map(image => (
                    <div className="w-1/2" key={image.id + '_image'}>
                        <img className="max-h-[200px] object-cover w-full object-center" src={process.env.NEXT_PUBLIC_BASE_URL + image.attributes.url} alt="" />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PostCard;