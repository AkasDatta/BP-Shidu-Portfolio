import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";

const BlogDetails = () => {
    const { id } = useParams(); // Get the blog ID from the URL
    const [blog, setBlog] = useState(null);
    const navigate = useNavigate(); // Initialize navigate

    useEffect(() => {
        fetch('/public/blog.json') // Ensure the correct path to the JSON file
            .then(response => response.json())
            .then(data => {
                const selectedBlog = data.find(blog => blog.id === parseInt(id));
                setBlog(selectedBlog);
            })
            .catch(error => console.error("Error fetching blog data:", error));
    }, [id]);

    if (!blog) return <div>Loading...</div>;

    return (
        <div className="max-w-screen-xl py-12 mx-auto px-5 lg:px-12 rounded-sm">
            <article className="group">
                <div className="flex justify-between items-center pb-5">
                    <h1 className="text-4xl font-bold text-gray-300">{blog.name}</h1>
                    {/* Close button that navigates back to the blog page */}
                    <button 
                        className="bg-gray-900 hover:bg-black p-2 rounded-xl"
                        onClick={() => navigate('/')} // Navigate to the blog page
                    >
                        <IoMdClose className="text-[#ff014e] text-2xl" />
                    </button>
                </div>
                <img src={blog.image} className="h-full w-full rounded-lg object-cover shadow-xl transition group-hover:grayscale-[50%]" alt={blog.title} />

                <div className="p-4">
                    <p className="text-lg font-medium text-gray-300">{blog.date}</p>
                    <h1 className="text-4xl font-bold text-gray-300 py-5">{blog.title}</h1>
                    <p className="mt-2 line-clamp-3 text-md text-gray-400">
                        {blog.description}
                    </p>
                </div>
            </article>
            <img src={blog.image2} className="h-96 w-full rounded-lg object-cover shadow-xl transition group-hover:grayscale-[50%]" alt={blog.title} />
        </div>
    );
};

export default BlogDetails;
