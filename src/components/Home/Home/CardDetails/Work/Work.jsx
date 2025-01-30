import image from "../../../../../assets/bpwork.jpg";
import network from "../../../../../assets/network.jpg";

const Work = () => {
    return (
        <div>
              <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                    <a href="https://www.blogger.com/profile/14962074601999675358" className="rounded-2xl bg-[#1a1d20] duration-500 hover:bg-[#121416] p-6 flex gap-8">
                        <div className="h-56 overflow-hidden rounded-2xl">
                            <img
                                src={image}
                                alt="Blog"
                                className="h-56 object-cover transform transition-transform duration-300 hover:scale-105"
                            />
                        </div>
                        <div className="relative py-6">
                            <div className="flex justify-between items-center">
                                <p className="text-[#FF014F] font-bold">Badhon Paul Shidu</p>
                            </div>
                            <h2 className="text-gray-400 font-semibold text-3xl py-4 hover:text-[#FF014F] duration-500">My personal blog</h2>
                        </div>
                    </a>
                    <a href="https://shidupaul.blogspot.com/" className="rounded-2xl bg-[#1a1d20] duration-500 hover:bg-[#121416] p-6 flex gap-8">
                        <div className="h-56 overflow-hidden rounded-2xl">
                            <img
                                src={network}
                                alt="Blog"
                                className="h-56 w-full object-cover transform transition-transform duration-300 hover:scale-105"
                            />
                        </div>
                        <div className="relative py-6">
                            <div className="flex justify-between items-center">
                                <p className="text-[#FF014F] font-bold">Shidu's flatform</p>
                            </div>
                            <h2 className="text-gray-400 font-semibold text-3xl py-4 hover:text-[#FF014F] duration-500">This Site Describe about my Skill and my Daily activities.</h2>
                        </div>
                    </a>
            </div>
            <div>
                <h2>hh</h2>
            </div>
        </div>
    );
};

export default Work;