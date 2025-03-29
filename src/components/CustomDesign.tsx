import '../styles/CustomDesign.css';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

const CustomDesign: React.FC = () => {
  return (
    <section className="custom-design">
      <div className="text-section">
        <h2>Customize your own design</h2>
        <p>Experience designing your own products easily and enjoyably. The intuitive design tool helps you create professional designs without any design skills.</p>
        <div className="buttons">
          {/* Use Link to navigate to DesignPage */}
          <Link to="/design">
            <button className="button-33">AI Customize</button>
          </Link>
          <button className="button-33"> Upload template</button>
        </div>
      </div>
      <div className="image-section"></div>
    </section>
  );
};

export default CustomDesign;
