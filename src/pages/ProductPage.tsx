import CustomDesign from '../components/CustomDesign';
import Navbar from '../components/Navbar';
import ProductBackground from '../components/Product-Background';
import ProductShowcase from '../components/ProductShowcase';
import ProductBar from '../components/ProductBar';

function ProductPage() {
    return (
      <>
        <Navbar />
        <ProductBackground />
        <ProductShowcase />
        <ProductBar />
        <CustomDesign />
      </>
    );
  }
  
  export default ProductPage;