import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import video from '../images/applewatch.mp4'
import applewatch from '../images/applewatch.jpg'
import { useAuth } from '../AuthContext'


const Featuredcollection = () => {
  const {API_URL}=useAuth()

    const [products, setProducts] = useState([]);
    
  useEffect(() => {
    fetch(`${API_URL}/product/getfeaturedproduct`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((res) => res.json())
      .then((data) => {setProducts(data.FeaturedProducts)
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, [API_URL]);

  return (
    <div>
      <div className="cardsmain">
        <br />
        <h1>Featured Collection</h1>
        <br />
        <div className="cards">
          {products.map((product, index) => (
            <div className="card" key={index}>
              <Link to={`/productbuy/${product._id}`}>
                <figure>
                  <img
                    src={`${API_URL}/product/${product.productImages[0].destination}/${product.productImages[0].filename}`}
                    alt=""
                  />
                  <figcaption>
                    <h4>{`${product.title.slice(0, 20)}.....`}</h4>
                    <br />
                    <div className="rating" style={{ color: 'gold' }}>
                      {Array.from({ length: 5 }).map((_, i) => (
                        <i key={i} className="fa-solid fa-star"></i>
                      ))}
                    </div>
                    <br />
                    <p>
                      Price:-
                      <span style={{ color: 'red', fontSize: '1.2rem' }}>
                        <b>₹{product.price}</b>
                      </span>{' '}
                      <strike>${'890'}</strike>
                    </p>
                  </figcaption>
                </figure>
              </Link>
            </div>
          ))}
        </div>
        <div className="secondFeatured">
          <div className="video">
            <video id="video" muted autoPlay loop src={video} type="video/mp4" />
          </div>
          <div className="productCard">
            {/* <img src={applewatchbanner} alt="" /> */}
            <img src={applewatch} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featuredcollection;
