import Hero from './pages/Hero';
import PopularProducts from './pages/PopularProducts';
import SuperQuality from './pages/SuperQuality';
import Services from './pages/Services';
import SpecialOffer from './pages/SpecialOffer';
import CustomerReviews from './pages/CustomerReviews';
import Subscribe from './pages/Subscribe';
import Footer from './components/Footer';
import Navbar from "./components/Navbar"
const App = () => {
  return (
    <main className="relative">
      <section>
        <Navbar />
      </section>
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="bg-pale-blue padding">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
}

export default App