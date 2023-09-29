const Subscribe = () => {
  return (
    <div> 
      <main className="lg:flex justify-between items-center  ">
        <div>
          <header className="text-4xl font-montserrat">
            Sign Up for <span className="text-coral-red">Updates</span> <br /> &
            Newsletter
          </header>
        </div>
        <div>
          <input
            type="text"
            placeholder="name@gmail.com"
            className="py-6 px-4 rounded-full lg:w-[590px] w-[80%] border border-black"
          />
          <button className="bg-coral-red text-white text-lg py-4 px-2 rounded-full absolute lg:left-[87%] lg:mt-2">
            Sign Up Now
          </button>
        </div>
      </main>
    </div>
  );
}

export default Subscribe