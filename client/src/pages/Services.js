import { shieldTick, star, truckFast } from "../assets/icons";

const Services = () => {
  return (
    <div>
      <main className="md:flex md:justify-center md:items-center md:gap-6 space-x-1 text-lg">
        <div className="border ring-1 ring-transparent p-12 w-full">
          <img src={truckFast} className="bg-coral-red rounded-full p-2 mb-2" />
          <h1 className="font-montserrat text-2xl mb-2 ">Free Shipping</h1>
          <h3>
            Enjoy seamless shopping with our <br /> Shipping services
          </h3>
        </div>
        <div className="border ring-0 shadow-lg ring-transparent p-12 w-full">
          <img src={shieldTick} className="bg-coral-red rounded-full p-2 mb-2" />
          <h1 className="font-montserrat text-2xl mb-2 ">Secure Payment</h1>
          <h3>
            Expericence worry-free <br />
            transactions with our secure <br /> payment options
          </h3>
        </div>
        <div className="border ring-1  ring-transparent p-12 w-full">
          <img src={star} className="rounded-full p-2 mb-2" />
          <h1 className="font-montserrat text-2xl mb-2 ">
            We love to help you{" "}
          </h1>
          <h3>
            Our dedicated team is here <br />
            to assist you with every step <br /> of the way
          </h3>
        </div>
      </main>
    </div>
  );
};

export default Services;
