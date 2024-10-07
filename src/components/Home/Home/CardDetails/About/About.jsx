import aboutImage from "../../../../../assets/aboutImage.jpeg"
import { IoMdCheckmark } from "react-icons/io";
const About = () => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-10">
                <div className="col-span-1 lg:col-span-3">
                    <img src={aboutImage} className="object-cover mx-auto rounded-xl w-full md:w-96 lg:w-96 h-[500px]" alt="" />
                </div>
                <div className="col-span-1 lg:col-span-4">
                    <h2 className="text-[#ff014e] font-semibold text-lg pt-2">VISIT MY PORTFOLIO & HIRE ME</h2>
                    <h1 className="text-3xl font-bold text-gray-300 pt-4 pb-6">About Me</h1>
                    <p className="text-lg text-gray-400 ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel minus labore hic magni quas placeat non et ut dolorum numquam, repellendus soluta accusamus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, aut!</p>

                    <div className="py-10">
                        <div className="flex gap-3 items-center text-xl">
                            <IoMdCheckmark className="text-gray-300" />
                            <p className="text-gray-500 text-xl font-semibold">Network Support Engineer</p>
                        </div>
                        <div className="flex gap-3 items-center text-xl py-2">
                            <IoMdCheckmark className="text-gray-300" />
                            <p className="text-gray-500 font-semibold text-xl">24/7 Support</p>
                        </div>
                        <div className="flex gap-3 items-center text-xl">
                            <IoMdCheckmark className="text-gray-300" />
                            <p className="text-gray-500 font-semibold text-xl">Unlimited Revisions</p>
                        </div>
                    </div>

                    <button className="text-[#ff0116] shadow-xl py-4 px-5 bg-[#171a1d]">DOWNLOAD MY CV</button>
                </div>
            </div>
        </div>
    );
};

export default About;