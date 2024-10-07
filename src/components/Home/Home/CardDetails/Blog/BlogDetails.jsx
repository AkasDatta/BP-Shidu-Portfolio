import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

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
        <div>
            <img src={blog.image2} alt={blog.title} />
            <h1>{blog.title}</h1>
            <p>{blog.description}</p>
            <p>{blog.date}</p>
            <p>{blog.readTime}</p>
        </div>
    );
};

export default BlogDetails;
