import image from "../../../../../assets/bpwork.jpg";
import network from "../../../../../assets/network.jpg";

const Work = () => {
    return (
        <div>
              <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                    <a href="https://www.blogger.com/profile/14962074601999675358" className="rounded-2xl bg-[#1a1d20] duration-500 hover:bg-[#121416] p-6 grid grid-cols-1 lg:grid-cols-5 gap-8">
                        <div className="h-56 overflow-hidden rounded-2xl col-span-1 lg:col-span-2">
                            <img
                                src={image}
                                alt="Blog"
                                className="h-56 w-full object-cover transform transition-transform duration-300 hover:scale-105"
                            />
                        </div>
                        <div className="col-span-1 lg:col-span-3 py-6">
                            <div className="flex justify-between items-center">
                                <p className="text-[#FF014F] font-bold">Badhon Paul Shidu</p>
                            </div>
                            <h2 className="text-gray-400 font-semibold text-3xl py-4 hover:text-[#FF014F] duration-500">My personal blog</h2>
                        </div>
                    </a>
                    <a href="https://shidupaul.blogspot.com/" className="rounded-2xl bg-[#1a1d20] duration-500 hover:bg-[#121416] p-6 grid grid-cols-1 lg:grid-cols-5 gap-8">
                        <div className="h-56 overflow-hidden rounded-2xl col-span-1 lg:col-span-2">
                            <img
                                src={network}
                                alt="Blog"
                                className="h-56 w-full object-cover transform transition-transform duration-300 hover:scale-105"
                            />
                        </div>
                        <div className=" py-6 col-span-1 lg:col-span-3">
                            <div className="flex justify-between items-center">
                                <p className="text-[#FF014F] font-bold">Shidu's flatform</p>
                            </div>
                            <h2 className="text-gray-400 font-semibold text-3xl py-4 hover:text-[#FF014F] duration-500">This Site Describe about my Skill and my Daily activities.</h2>
                        </div>
                    </a>
            </div>
            <div className="w-full max-w-2xl mx-auto">
    <iframe 
        className="w-full aspect-video rounded-lg shadow-lg" 
        src="https://www.youtube.com/embed/IpFX2vq8HKw" 
        allowfullscreen>
    </iframe>
</div>

        </div>
    );
};

export default Work;