import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";
import {useState} from "react";
const Hero = () => {
  const [bigShoeImg, setbigShoeImg] = useState(bigShoe1);
  return (
    <section className="w-full flex xl:flex-row flex-col min-h-screen gap-10 max-container">
      <div className="relative xl:w-2/5 flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer Collections
        </p>
        <h1 className="mt-10 font-palanquin text-[80px] max-sm:text-[72px] max-sm:leading:[82] font-bold ">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover Stylish Nike arrivals,quality comfort and innovation for your
          active life.
        </p>
        <Button label="Shop Now" iconUrl={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat, index) => {
            return (
              <div key={stat.label} value={index}>
                <p className="font-bold font-palanquin text-4xl ">
                  {stat.value}
                </p>
                <p className="leading-7 font-montserrat text-slate-gray">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigShoeImg}
          alt="Shoe Collection"
          width={610}
          height={500}
          className="object-contain relative"
        />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[10%] sm:left-[20%] max-sm:px-6">
          {shoes.map((shoe, index) => {
            return (
              <div key={shoe}>
                {console.log(index)}
                <ShoeCard
                  imageUrl={shoe}
                  changeShoe={(shoe) => setbigShoeImg(shoe)}
                  bigShoeImg={bigShoeImg}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;
