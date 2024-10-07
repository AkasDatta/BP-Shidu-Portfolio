
const Card = () => {
    return (
        <div className="mx-10 my-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6">
            <div className="bg-[#202327] rounded-lg p-5 shadow-lg  flex-col gap-6">
                <button className="bg-[#FF014F] text-[#C4CFDE] w-full md:py-9 lg:py-9 py-3 rounded-lg font-semibold text-xl">Blog</button>
                <button className="hover:bg-[#FF014F] text-[#C4CFDE] w-full py-9 rounded-lg font-semibold text-xl">About</button>
                <button className="hover:bg-[#FF014F] text-[#C4CFDE] w-full py-9 rounded-lg font-semibold text-xl">Work</button>
                <button className="hover:bg-[#FF014F] text-[#C4CFDE] w-full py-9 rounded-lg font-semibold text-xl">Resume</button>
                <button className="hover:bg-[#FF014F] text-[#C4CFDE] w-full py-9 rounded-lg font-semibold text-xl">Contact</button>
            </div>

            <div className="bg-[#202327] rounded-lg p-5 shadow-lg col-span-1 md:col-span-3 lg:col-span-5">
                hh 
            </div>
        </div>
    );
};

export default Card;