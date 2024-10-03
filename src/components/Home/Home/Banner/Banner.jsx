import coverImage from "../../../../assets/bgcover.avif";

const Banner = () => {
    return (
        <div>
            <img src={coverImage} className="w-full object-cover h-80 mx-auto" alt="" />
        </div>
    );
};

export default Banner;