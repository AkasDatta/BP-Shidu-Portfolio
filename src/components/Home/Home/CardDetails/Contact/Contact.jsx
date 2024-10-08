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
                        <a href="#" className="bg-[#181A1E] border border-[#181A1E] hover:border-[#ff014e] duration-500 p-3 shadow-2xl "><CiTwitter className="text-3xl text-white hover:text-[#ff014e] duration-500" /></a>
                        <a href="#" className="bg-[#181A1E] border border-[#181A1E] hover:border-[#ff014e] duration-500 p-3 shadow-2xl "><FiFacebook className="text-3xl text-white hover:text-[#ff014e] duration-500" /></a>
                        <a href="#" className="bg-[#181A1E] border border-[#181A1E] hover:border-[#ff014e] duration-500 p-3 shadow-2xl "><FiLinkedin className="text-3xl text-white hover:text-[#ff014e] duration-500" /></a>
                    </div>
                </div>
                <div className="col-span-1 lg:col-span-4">
                    <form className="mx-auto bg-[#212428] p-5 rounded-xl shadow-2xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mb-7">
                        <div>
                            <label for="text" className="block mb-3 text-sm text-gray-300">YOUR NAME</label>
                            <input type="email" id="email" className="shadow-sm bg-gray-800 border border-gray-600 text-white text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5" placeholder="Name" required />
                        </div>
                        <div>
                            <label for="number" className="block mb-3 text-sm text-gray-300">PHONE NUMBER</label>
                            <input type="email" id="email" className="shadow-sm bg-gray-800 border border-gray-600 text-white text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5" placeholder="Number" required />
                        </div>
                    </div>
                    <div className="mb-7">
                        <label for="email" className="block mb-3 text-sm text-gray-300">EMAIL</label>
                        <input type="email" id="email" className="shadow-sm bg-gray-800 border border-gray-600 text-white text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5" placeholder="example@email.com" required />
                    </div>
                    <div className="mb-7">
                        <label for="text" className="block mb-3 text-sm text-gray-300">SUBJECT</label>
                        <input type="email" id="email" className="shadow-sm bg-gray-800 border border-gray-600 text-white text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5" placeholder="" required />
                    </div>
                    <div className="mb-7">
                        <label for="message" className="block mb-3 text-sm text-gray-300">YOUR MESSAGE</label>
                        <textarea id="message" rows="11" className="shadow-sm bg-gray-800 border border-gray-600 text-white text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5" placeholder="Write your thoughts here..."></textarea>
                    </div>
                    <button type="submit" className="text-white bg-[#FF014F] hover:bg-[#ce184e] duration-500 focus:ring-4 focus:outline-none focus:ring-[#9e123c] font-medium rounded-lg text-sm mx-auto w-full py-2.5 text-center">SEND MESSAGE</button>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Contact;