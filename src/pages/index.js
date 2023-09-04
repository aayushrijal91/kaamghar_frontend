import { useEffect, useState } from "react";
import { fetchQuery } from "@/util";
import PostCard from "@/Components/PostCard";

function Home({ jobs, meta }) {  
  const [jobData, setJobData] = useState([]);
  const [openJobPosts, setOpenJobPosts] = useState(0);

  useEffect(() => {
    const trueJobPostCount = jobs.filter(job => job.attributes.post_status).length;
    setOpenJobPosts(trueJobPostCount);

    const sortedData = jobs.sort((a, b) => new Date(b.attributes.createdAt) - new Date(a.attributes.createdAt));

    setJobData(sortedData);
  }, []);

  return (
    <main className="py-5">
      <div className="container">
        <div className="flex gap-x-4">
          <div className="w-1/4">
            <div className="bg-white border w-full p-5 rounded-lg">

            </div>
          </div>

          <div className="w-2/4">
            <div className="flex flex-col gap-y-3">
              {jobData.map(job => (
                <PostCard key={job.id} job={job.attributes} />
              ))}
            </div>
          </div>

          <div className="w-1/4">
            <div className="bg-white border w-full p-5 rounded-lg">
              <div className="text-gray-500 flex items-center gap-x-1"><div className="bg-green-500 h-[10px] w-[10px] rounded-full mr-2"></div> {openJobPosts} open job posts</div>
              <div className="text-gray-500 flex items-center gap-x-1"><div className="bg-red-500 h-[10px] w-[10px] rounded-full mr-2"></div> {meta.pagination.total - openJobPosts} closed job posts</div>
              <div className="text-gray-500 flex items-center gap-x-1"><div className="bg-yellow-500 h-[10px] w-[10px] rounded-full mr-2"></div> {meta.pagination.total} total job posts</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home;

export async function getServerSideProps() {
  const response = await fetchQuery("jobs");

  return {
    props: {
      jobs: response.data,
      meta: response.meta
    }
  }
}
