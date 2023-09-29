import {products} from "../constants/index"

const PopularProducts = () => {
  return (
    <div className="p-4" >
      <header className="text-4xl font-montserrat  ">
        Our <span className="text-coral-red" >Popular</span> Products
      </header>
      <div className="mt-10 text-lg font-sans">
        <p>
          Experience top notch quality and style with our sought-after
        </p>
        <br/>
        selections.Discover a world of comfort,design and value
      </div>
      <div className="p-2 space-x-2 grid grid-cols-4 grid-flow-row py-3 max-lg:grid-cols-2 max-md:grid-cols-1 max-md:ml-10 max-sm:ml-10" >
        {
          products.map((product)=>{
            return (
              <div key={product}>
                <img className="pb-2 my-2" src={product.imgURL} />
                <h2 className="ml-[72px]">{product.name}</h2>
                <p className="ml-[72px]">⭐(4.5)</p>
                <p className="ml-[72px] text-coral-red text-lg">{product.price}</p>
              </div>
            );
          })
        }
      </div>
    </div>
  )
}

export default PopularProducts