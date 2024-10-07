import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";

const BlogDetails = () => {
    const { id } = useParams(); // Get the blog ID from the URL
    const [blog, setBlog] = useState(null);

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
                <div className="flex justify-between items-center  pb-5 ">
                    <h1 className="text-4xl font-bold text-gray-300">{blog.title}</h1>
                    <button className="bg-gray-900 hover:bg-black p-2 rounded-xl"><IoMdClose className="text-[#ff014e] text-2xl "/></button>
                </div>
                <img src={blog.image} className="h-full w-full rounded-lg object-cover shadow-xl transition group-hover:grayscale-[50%]" alt={blog.title} />

                <div className="p-4">
                    <a href="#">
                    <h3 className="text-lg font-medium text-gray-900">Finding the Journey to Mordor</h3>
                    </a>

                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
                    pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem,
                    mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque
                    dignissimos. Molestias explicabo corporis voluptatem?
                    </p>
                </div>
            </article>
            <img src={blog.image} alt={blog.title} />
            <h1>{blog.title}</h1>
            <img src={blog.image2} alt={blog.title} />
            <p>{blog.description}</p>
            <p>{blog.date}</p>
            <p>{blog.readTime}</p>
        </div>
    );
};

export default BlogDetails;
