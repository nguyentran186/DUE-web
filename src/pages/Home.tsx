import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CustomDesign from '../components/CustomDesign';
import ProductShowcase from '../components/ProductShowcase';
import TrendingSection from '../components/TrendingSection';
import Reviews from '../components/Reviews';


function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <CustomDesign />
      <ProductShowcase />
      <TrendingSection />
      <Reviews />
    </>
  );
}

export default Home;
