//import {useState} from 'react';

function Home({addToCart}) {

  // const [counter, setCounter] = useState(10);
  // const [btnText, setBtnText]= useState('Hello');
  const products = [
    {
      name: 'Cartoon Key Chain',
      description: 'Colorful and cute design.',
      price: 99,
      image: '/images/Hook_Home_Sweet_Home_Keychain-cr-black_6_533x (1).webp'
    },
    {
      name: 'Name Key Chain',
      description: 'Customized with your name.',
      price: 149,
      image: '/images/Baby-Fury-Dragon-3D-Keychain-11_250x250@2x.webp'
    },
    {
      name: 'Leather Key Chain',
      description: 'Premium and classy look.',
      price: 199,
      image: '/images/5_226bc202-8ec9-47ef-ae39-f768b4935500.webp'
    },
    {
      name: 'Avengers Key Chain',
      description: 'Your super hero key chain.',
      price: 210,
      image: '/images/71dum2em08L.webp'
    }
  ];

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
          <img src="/images/Adorable-Panda-with-Headphones-3D-Keychain_250x250@2x.webp" height="100%" width="100%" />
        </div>

     </section>
      
      { /* Product Section */}
     <section className="products">
      <h2>Our Popular Key Chains</h2>

      <div className="productGrid">

      { products.map((product)=>(

         <div className="card">
            <div className="imageBox">
              <img src={product.image} height="100%" width="100%" />
            </div>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <strong>₹{product.price}</strong>
            <button className="cartBtn" onClick={addToCart}>Add to Cart</button>
        </div>
      
    ))}
       

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