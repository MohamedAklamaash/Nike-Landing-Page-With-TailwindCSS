import {offer} from "../assets/images"
import Button from "../components/Button";
import {arrowRight} from "../assets/icons"
const SpecialOffer = () => {
  return (
    <div>
      <main className="md:flex flex-1 md:justify-center md:items-center font-montserrat md:leading-[3rem]">
        <div>
          <img src={offer} />
        </div>
        <div>
          <header className="md:absolute  lg:top-[53.8%] lg:left-[65%] my-3">
            <h1 className="text-4xl">
              <span className="text-coral-red font-bold">Special</span> Offer
            </h1>
          </header>
          <p>
            Embark on a shopping journey that redefines your expericence with{" "}
            <br /> unbeatable deals.From premier selections to incredible
            savings,
            <br />
            we offer unparalled value that sets us apart.
          </p>
          <p>
            Navigate a realm of possiblites designed <br /> to fullfill your
            unique desires,surpassing the loftiest <br />
            expectations.Your journey with us is nothing short of exceptional
          </p>
          <div className="mt-10">
            <Button label={"Shop Now"} iconUrl={arrowRight} />
            <button className="border border-blue-100 rounded-full px-4 py-2 text-lg mt-2 ">
              Learn More
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default SpecialOffer