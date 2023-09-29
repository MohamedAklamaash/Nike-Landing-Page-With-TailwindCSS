import {shoe8} from "../assets/images";

const SuperQuality = () => {
  return (
    <div>
      <header className="text-4xl font-montserrat font-bold">
        We Provide You{" "}
        <span className="text-coral-red">
          Super <br /> Quality
        </span>{" "}
        shoes
      </header>
      <div className="text-lg font-palanquin mb-4 my-2 ">
        <p>
          Ensuring premium comfort and style,our meticulously <br />
          crafted footwear is designed to elevate you experience, <br />
          provided you with unmatched quality,innovation and <br />a touch of
          elegance.
        </p>
        <br />
        <p>Our dedication to detail and excellance ensures your satisfaction</p>
      </div>
      <button className="rounded-full w-[120px] h-[40px] bg-coral-red text-white">
        View Details
      </button>
      <div className="flex justify-center items-center">
        <img src={shoe8} className="md:absolute md:left-[50%] md:top-[33%]" />
      </div>
    </div>
  );
}

export default SuperQuality