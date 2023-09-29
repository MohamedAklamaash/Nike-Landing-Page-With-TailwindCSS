import {reviews} from "../constants/index";
const CustomerReviews = () => {
  return (
    <div>
      <article className="text-lg text-center leading-10">
        <header className="text-4xl">
          What do our <span className="text-coral-red">Customers </span> Say?!!
        </header>
        <p className="mt-3 font-palanquin">
          Hear genuine stories from our satisfied customers about their
          <br/>
          exceptional experiences with us.
        </p>
      </article>
      <main className="font-palanquin">
        <section className="flex mt-4 justify-center items-center">
          {
            reviews.map((review,index)=>{
              return (
                <div key={index}>
                  <img src={review.imgURL} className="rounded-full w-[190px] lg:ml-[16pc] mb-4" />
                  <h2 className="text-lg text-center mb-1">{review.customerName}</h2>
                  <p className="text-lg text-center mb-1">{review.rating}⭐</p>
                  <p className="text-lg text-center">{review.feedback}</p>
                </div>
              );
            })
          }
        </section>
      </main>
    </div>
  );
}

export default CustomerReviews