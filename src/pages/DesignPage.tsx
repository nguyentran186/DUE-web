import { useState } from 'react';
import '../styles/DesignPage.css'; // Ensure correct path for your CSS
import Navbar from '../components/Navbar';
import PreFooter from '../components/PreFooter';
import Footer from '../components/Footer';

const DesignPage = () => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [_, setError] = useState<string | null>(null);
  const [selectedBag, setSelectedBag] = useState<string>("Bag");
  const [promptText, setPromptText] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const bagTypes = ['Hard box', 'Soft box', 'Tote bag'];

  const handleFinishClick = () => {
    setShowPopup(true); // Show the popup when Finish is clicked
  };

  const handleClosePopup = () => {
    setShowPopup(false); // Close the popup
  };

  const query = async (data: { inputs: string }) => {
    try {
      const response = await fetch(
        'https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-3.5-large',
        {
          headers: {
            Authorization: 'Bearer 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', // Replace with your Hugging Face API key
            'Content-Type': 'application/json',
          },
          method: 'POST',
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to generate image');
      }

      const result = await response.blob();
      const imageUrl = URL.createObjectURL(result);
      return imageUrl;
    } catch (error) {
      console.error(error);
      throw new Error('Error fetching the image');
    }
  };

  const handleCreateImage = async (textInput: string) => {
    console.log(textInput);
    setLoading(true);
    setError(null);
    setImageSrc(null);

    try {
      const prompt = `Design a ${textInput} ${selectedBag}`;
      // Generate the image
      const imageUrl = await query({ inputs: prompt });
      setImageSrc(imageUrl);
    } catch (err: any) {
      setError('Failed to generate image. Please try again later.');
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleBagSelection = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedBag(event.target.value);
  };

  return (
    <div className="page-container">
      <Navbar />
      <div className="main-content">
        <div className="left-container">
          <h2>AI Design</h2>
          <p>
            With intelligent AI technology, we help you create unique packaging designs in just a
            few minutes. From concept to final product, AI will assist you in creating impressive
            and professional designs.
          </p>

          <select className="select-menu" value={selectedBag || ''} onChange={handleBagSelection}>
            <option value="" disabled>
              Select bag type
            </option>
            {bagTypes.map((bag) => (
              <option key={bag} value={bag}>
                {bag}
              </option>
            ))}
          </select>

          <textarea
            className="prompt-input"
            placeholder="Enter your request..."
            value={promptText}
            onChange={(e) => setPromptText(e.target.value)}
          ></textarea>

          <button
            className="cssbuttons-io-button"
            onClick={() => {
              if (promptText && selectedBag) {
                handleCreateImage(`Design a ${promptText} ${selectedBag}`);
              } else {
                alert('Please fill in all fields');
              }
            }}
          >
            Create
            <div className="icon">
              <svg
                height="24"
                width="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </button>
        </div>

        <div className="right-container">
          {/* Top Part (70%) */}
          <div className="top-part">
            <div className="left-column">
              <div className="image-row">
                <div className="action-div">
                  <img src="/DUE-web/images/product.png" alt="Product 1" />
                </div>
                <div className="action-div">
                  <img src="/DUE-web/images/product.png" alt="Product 2" />
                </div>
                <div className="action-div">
                  <img src="/DUE-web/images/product.png" alt="Product 3" />
                </div>
                <div className="action-div">
                  <img src="/DUE-web/images/product.png" alt="Product 4" />
                </div>
              </div>
            </div>

            <div className="middle-column">
              {loading ? (
                <div className="loading-spinner">
                  <img src="/DUE-web/images/spinner.gif" alt="Loading..." />
                </div>
              ) : imageSrc ? (
                <img src={imageSrc} alt="Generated Design" className="generated-image" />
              ) : (
                <img src="/DUE-web/images/product-big.png" alt="Default Image" className="default-image" />
              )}
            </div>

            <div className="right-column"></div>
          </div>

          {/* Bottom Part (30%) */}
          <div className="bottom-part">
            <div className="button-group">
              <button className="action-button1">
                <i className="fa-solid fa-arrow-right"></i>
              </button>
              <button className="action-button1">
                <i className="fa-solid fa-arrow-left"></i>
              </button>
              <button className="action-button1">
                <i className="fa-solid fa-rotate-right"></i>
              </button>
              <button className="action-button1">
                <i className="fa-solid fa-heart"></i>
              </button>
            </div>
            <div className="button-92" onClick={handleFinishClick}>
              <span className="sp">Finish</span>
            </div>
            {showPopup && (
              <div className="popup-overlay">
                <div className="popup-content">
                  <h2>Complete Design</h2>
                  <p>Are you sure you want to confirm this design?</p>

                  <div className="popup-buttons">
                    <button className="popup-button back-button action-button1" onClick={handleClosePopup}>
                      Go back
                    </button>
                    <button className="popup-button add-to-cart-button button-92">Add to cart</button>
                  </div>

                  <div className="popup-modify">
                    <button className="popup-modify-button button-92">
                      I want to edit
                      <br /> (Click to contact designer)
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignPage;
