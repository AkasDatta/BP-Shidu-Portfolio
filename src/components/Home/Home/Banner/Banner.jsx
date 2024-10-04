import profile from "../../../../assets/profile.jpg";

const Banner = () => {
    return (
        <div>
            <section className="">
                <div
                className="p-5 bg-image"
                style={{
                    backgroundImage:
                    "url('https://images.unsplash.com/photo-1621419203051-f4e463849784?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')",
                    height: '300px',
                }}
                ></div>

                <div
                className="card mx-4 mx-md-5 shadow-5-strong"
                style={{
                    marginTop: '-70px',
                }}
                >
                <div className="bg-[#202327] mx-5 rounded-lg">
                    <div className="flex gap-6 p-6">
                        <div className="">
                            <img src={profile} alt="" className="border-4 border-gray-500 rounded-md"/>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-[#C4CFDE] py-4">Badhon Paul Shidu</h2>
                            <p className="font-semibold text-[#838994] text-lg">I am a Network Engineer</p>
                            <div>
                                hh
                            </div>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;
