import { MdOutlineWatchLater } from "react-icons/md";

const Work = () => {
    return (
        <div>
              <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <a href="#" className="rounded-2xl bg-[#1a1d20] duration-500 hover:bg-[#121416] p-6">
                        <div className="h-48 sm:h-56 w-full overflow-hidden rounded-2xl">
                            <img
                                src={image}
                                alt="Blog"
                                className="h-full w-full object-cover transform transition-transform duration-300 hover:scale-105"
                            />
                        </div>
                        <div className="relative py-6">
                            <div className="flex justify-between items-center">
                                <p className="text-[#FF014F] font-bold">hh</p>
                                <p className="text-gray-400 font-bold flex gap-1 items-center">
                                    <MdOutlineWatchLater />  read
                                </p>
                            </div>
                            <h2 className="text-gray-400 font-semibold text-3xl py-4 hover:text-[#FF014F] duration-500"></h2>
                        </div>
                    </a>
            </div>
        </div>
    );
};

export default Work;