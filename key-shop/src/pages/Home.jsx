//import {useState} from 'react';

function Home() {

  // const [counter, setCounter] = useState(10);
  // const [btnText, setBtnText]= useState('Hello');

  return (
    <div className="app">
      {/* Hero Section */}
     <section className="hero">
        <div className="heroText">
          <h2>Beautiful Key Chain For Every Style</h2>
          <p>
            Explore stylish, cute and customized key chains for yourself and your friends and family.
          </p>
          <button>Shop Now</button>
        </div>
        
        <div className="heroImage">
          <img src="/images/Hook_Home_Sweet_Home_Keychain-cr-black_6_533x (1).webp" height="100%" width="100%" />
        </div>

     </section>
      
      { /* Product Section */}
     <section className="products">
      <h2>Our Popular Key Chains</h2>

      <div className="productGrid">

        <div className="card">
          <div className="imageBox">
            <img src="./images/5_226bc202-8ec9-47ef-ae39-f768b4935500.webp" height="100%" width="100%" />
          </div>
          <h3>Cartoon Key Chain</h3>
          <p>Colorful and cute design.</p>
          <strong>₹99</strong>
          <button className="cartBtn">Add to Cart</button>
        </div>


        <div className="card">
          <div className="imageBox">
           <img src="./images/Adorable-Panda-with-Headphones-3D-Keychain_250x250@2x.webp" height="100%" width="100%" />
          </div>
          <h3>Name Key Chain</h3>
          <p>Customized with your name.</p>
          <strong>₹149</strong>
          <button className="cartBtn">Add to Cart</button>
        </div>


        <div className="card">
          <div className="imageBox">
            <img src="./images/71dum2em08L.webp" height="100%" width="100%" />
          </div>
          <h3>Leather Key Chain</h3>
          <p>Premium and classy look.</p>
          <strong>₹199</strong>
          <button className="cartBtn">Add to Cart</button>
        </div>

        <div className="card">
          <div className="imageBox">
            <img src="./images/Baby-Fury-Dragon-3D-Keychain-11_250x250@2x.webp" height="100%" width="100%" />
          </div>
          <h3>Avengers Key Chain</h3>
          <p>Your super hero key chain.</p>
          <strong>₹210</strong>
          <button className="cartBtn">Add to Cart</button>
        </div>
      </div>
      

     </section>
    
    { /* About Section */}

    <section className="about">
      <h2>Why Choose Us?</h2>
      <p>
        We provide affordable, durable and nice designs, perfrect for gifting.
      </p>
    </section>

    </div>
  );
}

export default Home;