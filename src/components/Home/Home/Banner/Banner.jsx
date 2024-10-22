import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import profile from "../../../../assets/profile.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div>
            <section className="">
                <div
                className="p-5 bg-image"
                style={{
                    backgroundImage:
                    "url('https://images.unsplash.com/photo-1510218830377-2e994ea9087d?q=80&w=1616&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                    height: '300px',
                }}
                >
                    <div className=" justify-end flex">
                        <Link to="/login" className="border-red-600 font-semibold border-2 text-red-500 hover:bg-red-600 hover:text-white duration-500 px-3 py-2 m-4 rounded-md flex items-center gap-1">Login</Link>
                    </div>
                </div>
                <div
                className="card mx-4 mx-md-5 shadow-5-strong"
                style={{
                    marginTop: '-70px',
                }}
                >
                <div className="bg-[#202327] mx-5 rounded-lg grid grid-cols-1 lg:grid-cols-2 shadow-xl">
                    <div className="flex flex-wrap gap-6 m-6 lg:border-r border-black">
                        <div>
                            <img src={profile} alt="" className="border-4 border-gray-500 rounded-md"/>
                        </div>
                        <div>
                            <h2 className="text-4xl font-bold text-[#C4CFDE] py-4">Badhon Paul Shidu</h2>
                            <p className="font-semibold text-[#838994] text-xl">I'm a Junior Network Support Engineer</p>
                            <div className="flex gap-5 pt-12">
                                <a href="https://www.facebook.com/badhonpaul.shidu" className="p-2 bg-[#15171a] duration-500 text-gray-300 hover:text-blue-400 rounded-lg hover:bg-black cursor-pointer">
                                    <FaFacebook className="text-4xl"/>
                                </a>
                                <a href="https://www.linkedin.com/in/badhon-paul-shidu-076167266/" className="p-2 bg-[#15171a] duration-500 hover:text-blue-500 text-gray-300 rounded-lg hover:bg-black cursor-pointer">
                                    <FaLinkedin className="text-4xl"/>
                                </a>
                                <a href="#" className="p-2 bg-[#15171a] duration-500 text-gray-300 hover:text-[#ff0101] rounded-lg hover:bg-black cursor-pointer">
                                    <FaYoutube className="text-4xl"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="pt-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-5 my-0 mb-5 md:my-5 lg:my-5">
                            <div className="pb-4">
                                <p className="font-semibold text-[#838994] text-lg py-2">EMAIL</p>
                                <h2 className="font-semibold text-[#C4CFDE] text-2xl">bachon.paul @gmail.com</h2>
                            </div>
                            <div>
                                <p className="font-semibold text-[#838994] text-lg py-2">PHONE</p>
                                <h2 className="font-semibold text-[#C4CFDE] text-2xl">+880 1223244556</h2>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-5 my-0 mb-5 md:my-5 lg:my-5">
                            <div className="pb-6">
                                <p className="font-semibold text-[#838994] text-lg py-2">BIRTHDAY</p>
                                <h2 className="font-semibold text-[#C4CFDE] text-2xl">20 August</h2>
                            </div>
                            <div>
                                <p className="font-semibold text-[#838994] text-lg py-2">LOCATION</p>
                                <h2 className="font-semibold text-[#C4CFDE] text-2xl">Dhaka, Bangladesh</h2>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;
