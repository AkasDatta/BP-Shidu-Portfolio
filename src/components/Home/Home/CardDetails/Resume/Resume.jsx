

const Resume = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
                <h1 className="text-[#FF014F] text-lg">2019 - 2022</h1>
                <p className="text-gray-300 font-bold text-4xl py-3">Education Quality</p>

                <div className=" bg-[#1F2226] shadow-2xl p-8 mt-5">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-3xl text-gray-300 pb-3">Diploma in Telecommunication Technology (TCT)</p>
                            <p className="text-gray-400 text-lg">Feni Govt. Computer Institute</p>
                        </div>
                        <p className="text-[#FF014F] bg-gray-900 px-3 py-1">3.65/4</p>
                    </div>
                    <p className="pt-12 text-gray-400 text-xl">Feni Computer Institute is a technology based institution in Feni Sadar Upazila, Bangladesh. It is directed under The Directorate of Technical Education(DTE). This is the first government ICT based polytechnic institute for diploma in engineering courses in Bangladesh. It provides diploma in engineering program in three technologies, they are 1. Data Telecommunication and Networking (DTNT), 2. Computer Science and Technology (CST) and 3. Telecommunication Technology.</p>
                </div>
            </div>
            <div>
                <h1 className="text-[#FF014F] text-lg">2023 - Present</h1>
                <p className="text-gray-300 font-bold text-4xl py-3">Education Quality</p>

                <div className=" bg-[#1F2226] shadow-2xl p-8 mt-5">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-3xl text-gray-300 pb-3">BSC in Computer Science & Engineering (CSE)</p>
                            <p className="text-gray-400 text-lg">University of South Asia</p>
                        </div>
               
                    </div>
                    <p className="pt-12 text-gray-400 text-xl">
                        University of South Asia is the University for Generation Bangladesh who aspires for an inclusive Bangladesh. It's the only university that connects all the dots and let your network that you build here take care of your career.
                        <br /><br />For its outstanding central location in Amin Bazar, Savar, Dhaka The campus offers an idyllic environment for an academic institution.</p>
                </div>
            </div>
        </div>
    );
};

export default Resume;