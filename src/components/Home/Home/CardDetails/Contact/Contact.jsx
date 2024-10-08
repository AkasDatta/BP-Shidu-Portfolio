import contactImage from "../../../../../assets/contact.jpg";

const Contact = () => {
    return (
        <div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-10">
                <div className="col-span-1 lg:col-span-3 bg-[#212428] p-5 rounded-xl shadow-2xl">
                    <img src={contactImage} className="object-cover mx-auto rounded-xl w-full" alt="" />
                    <h2 className="text-gray-300 text-3xl font-bold">Badhon Paul Shidu</h2>
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