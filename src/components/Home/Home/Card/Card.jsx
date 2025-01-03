import { useState } from 'react';
import About from "../CardDetails/About/About";
import Blog from "../CardDetails/Blog/Blog";
import Resume from '../CardDetails/Resume/Resume';
import Contact from '../CardDetails/Contact/Contact';
import Work from '../CardDetails/Work/Work';

const Card = () => {
    const [activeTab, setActiveTab] = useState("Blog"); // Default is "Blog"

    return (
        <div className="mx-10 my-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6">
            <div className="bg-[#202327] rounded-lg p-5 shadow-2xl flex-col gap-6">
                <button
                    onClick={() => setActiveTab("Blog")}
                    className={`${
                        activeTab === "Blog" ? 'bg-[#FF014F]' : 'hover:bg-[#FF014F]'
                    }  text-[#C4CFDE] w-full my-2 md:my-0 lg:my-0 md:py-9 lg:py-9 py-3 rounded-lg font-semibold text-xl duration-500`}
                >
                    Blog
                </button>
                <button
                    onClick={() => setActiveTab("About")}
                    className={`${
                        activeTab === "About" ? 'bg-[#FF014F]' : 'hover:bg-[#FF014F]'
                    } text-[#C4CFDE] w-full my-2 md:my-0 lg:my-0 md:py-9 lg:py-9 py-3 rounded-lg font-semibold text-xl duration-500`}
                >
                    About
                </button>
                <button
                    onClick={() => setActiveTab("Work")}
                    className={`${
                        activeTab === "Work" ? 'bg-[#FF014F]' : 'hover:bg-[#FF014F]'
                    } text-[#C4CFDE] w-full my-2 md:my-0 lg:my-0 md:py-9 lg:py-9 py-3 rounded-lg font-semibold text-xl duration-500`}
                >
                    Work
                </button>
                <button
                    onClick={() => setActiveTab("Resume")}
                    className={`${
                        activeTab === "Resume" ? 'bg-[#FF014F]' : 'hover:bg-[#FF014F]'
                    } text-[#C4CFDE] w-full my-2 md:my-0 lg:my-0 md:py-9 lg:py-9 py-3 rounded-lg font-semibold text-xl duration-500`}
                >
                    Resume
                </button>
                <button
                    onClick={() => setActiveTab("Contact")}
                    className={`${
                        activeTab === "Contact" ? 'bg-[#FF014F]' : 'hover:bg-[#FF014F]'
                    } text-[#C4CFDE] w-full my-2 md:my-0 lg:my-0 md:py-9 lg:py-9 py-3 rounded-lg font-semibold text-xl duration-500`}
                >
                    Contact
                </button>
            </div>

            <div className="bg-[#202327] rounded-lg p-5 shadow-lg col-span-1 md:col-span-3 lg:col-span-5">
                {activeTab === "Blog" && <Blog />}
                {activeTab === "About" && <About />}
                {activeTab === "Work" && <Work />}
                {activeTab === "Resume" && <Resume />}
                {activeTab === "Contact" && <Contact />}
            </div>
        </div>
    );
};

export default Card;
