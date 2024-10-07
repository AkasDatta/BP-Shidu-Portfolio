import { useState, useEffect } from "react";
import { MdOutlineWatchLater } from "react-icons/md";
import { Link } from "react-router-dom";

const Blog = () => {
    const [selectedCategory, setSelectedCategory] = useState("CCNA"); // Default category
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('/public/blog.json') // Update with the correct path
            .then(response => response.json())
            .then(data => setBlogs(data))
            .catch(error => console.error("Error fetching blog data:", error));
    }, []);

    const filteredBlogs = blogs.filter(blog => blog.name === selectedCategory);

    return (
        <div>
            <div className="flex gap-4 flex-wrap">
                {/* Category Buttons */}
                {["CCNA", "MTCNA & MTCRE", "FTTX", "CCTV"].map(category => (
                    <button
                        key={category}
                        className={`text-white border-blue-600 border px-3 py-1 rounded-md ${selectedCategory === category ? "bg-blue-700" : "bg-gray-900"}`}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredBlogs.map(blog => (
                    <Link key={blog.id} to={`/blog/${blog.id}`} className="rounded-2xl bg-[#1a1d20] duration-500 hover:bg-[#121416] p-6">
                        <div className="h-48 sm:h-56 w-full overflow-hidden rounded-2xl">
                            <img
                                src={blog.image}
                                alt={blog.title}
                                className="h-full w-full object-cover transform transition-transform duration-300 hover:scale-105"
                            />
                        </div>
                        <div className="relative py-6">
                            <div className="flex justify-between items-center">
                                <p className="text-[#FF014F] font-bold">{blog.name}</p>
                                <p className="text-gray-400 font-bold flex gap-1 items-center">
                                    <MdOutlineWatchLater /> {blog.readTime} read
                                </p>
                            </div>
                            <h2 className="text-gray-400 font-semibold text-3xl py-4 hover:text-[#FF014F] duration-500">{blog.title}</h2>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Blog;
