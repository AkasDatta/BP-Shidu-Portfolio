
const Blog = () => {
    return (
        <div>
             <div className="flex gap-4 flex-wrap">
                <button className="text-white border-blue-600 border bg-blue-700 hover:bg-blue-700 px-3 py-1 rounded-md ">CCNA</button>
                <button className="text-white border-blue-600 border bg-gray-900 hover:bg-blue-700 px-3 py-1 rounded-md ">MTCNA & MTCRE</button>
                <button className="text-white border-blue-600 border bg-gray-900 hover:bg-blue-700 px-3 py-1 rounded-md ">FTTX</button>
                <button className="text-white border-blue-600 border bg-gray-900 hover:bg-blue-700 px-3 py-1 rounded-md ">CCTV</button>
            </div>
            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <a href="#" className="group relative block overflow-hidden rounded-2xl">
                <img
                    src="https://images.unsplash.com/photo-1599481238640-4c1288750d7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2664&q=80"
                    alt=""
                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
                />

                <div className="relative p-6">
                   <div className="flex justify-between">
                        <p className="text-[#FF014F] font-bold">CCNA</p>
                        <p className="text-gray-300 font-bold">4 min read</p>
                   </div>

                    <h3 className="mt-4 text-lg font-medium text-gray-900">Robot Toy</h3>

                    <p className="mt-1.5 text-sm text-gray-700">$14.99</p>

                    <form className="mt-4">
                    <button
                        className="block w-full rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105"
                    >
                        Add to Cart
                    </button>
                    </form>
                </div>
                </a>
            </div>
        </div>
    );
};

export default Blog;