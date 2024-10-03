import coverImage from "../../../../assets/bgcover.avif";
import profile from "../../../../assets/profile.jpg";

const Banner = () => {
    return (
        <div>
            <img src={coverImage} className="w-full object-cover h-80 mx-auto" alt="" />
            <div className="bg-[#202327]">
                <div className="flex gap-6 p-6">
                    <div className="">
                        <img src={profile} alt="" className="border-4 border-gray-500 rounded-md"/>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-[#C4CFDE] py-4">Badhon Paul Shidu</h2>
                        <p className="font-semibold text-[#838994] text-lg">I am a Network Engineer</p>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default Banner;