import { CiTwitter } from "react-icons/ci";
import contactImage from "../../../../../assets/contact.jpg";
import { FiFacebook, FiLinkedin } from "react-icons/fi";

const Contact = () => {
    return (
        <div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-10">
                <div className="col-span-1 lg:col-span-3 bg-[#212428] p-5 rounded-xl shadow-2xl">
                    <img src={contactImage} className="object-cover mx-auto rounded-xl w-full" alt="" />
                    <h2 className="text-gray-300 text-3xl pt-6 font-bold">Badhon Paul Shidu</h2>
                    <p className="text-gray-400 text-xl pt-6">NetWork Engineer</p>
                    <p className="text-gray-400 text-xl py-6">I am available for freelance work. Connect with me via and call in to my account.</p>
                    <p className="text-gray-400 text-xl pb-1">Phone: <span className="text-gray-300 hover:text-[#ff014e] duration-500">+0181223345</span></p>
                    <p className="text-gray-400 text-xl pb-6">Email: <span className="text-gray-300 hover:text-[#ff014e] duration-500">badhonpaul@email.com</span></p>
                    <p className="text-gray-400 text-xl pb-6">FIND WITH ME</p>
                    <div className="flex flex-wrap gap-8">
                        <button className="bg-[#181A1E] border border-[#181A1E] hover:border-[#ff014e] duration-500 p-3 shadow-2xl "><CiTwitter className="text-3xl text-white hover:text-[#ff014e] duration-500" /></button>
                        <button className="bg-[#181A1E] border border-[#181A1E] hover:border-[#ff014e] duration-500 p-3 shadow-2xl "><FiFacebook className="text-3xl text-white hover:text-[#ff014e] duration-500" /></button>
                        <button className="bg-[#181A1E] border border-[#181A1E] hover:border-[#ff014e] duration-500 p-3 shadow-2xl "><FiLinkedin className="text-3xl text-white hover:text-[#ff014e] duration-500" /></button>
                    </div>
                </div>
                <div className="col-span-1 lg:col-span-4">
                    <h2 className="text-[#ff014e] font-semibold text-lg pt-2">VISIT MY PORTFOLIO & HIRE ME</h2>
                    <h1 className="text-3xl font-bold text-gray-300 pt-4 pb-6">About Me</h1>
                    <p className="text-lg text-gray-400 ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel minus labore hic magni quas placeat non et ut dolorum numquam, repellendus soluta accusamus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, aut!</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;