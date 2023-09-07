import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import loader from '../icons/loader.gif'

import { useAuth } from '../AuthContext'

function Products() {
  const {API_URL}=useAuth()

  const [Loading, setLoading] = useState(true);
  const { type } = useParams();
  const [price, setPrice] = useState(999);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/product/getproductsList/${type}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.productlist)
        setLoading(false)
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, [type]);

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  return (
    <div className="productBg">
      {Loading ? (
        <div className="loader">
          <img src={loader} alt='loader'/>
        </div>
      ) : (

        <div className="prouctMain">
          <div className="fillter">
            <h1>Filter</h1>
            <hr />
            <div className="first">
              <h3>Color</h3>
              <ul>
                {/* Add checkboxes for colors */}
              </ul>
            </div>
            <hr />
            <div className="first">
              <h3>Category</h3>
              <ul>
                {/* Add checkboxes for categories */}
              </ul>
            </div>
            <hr />
            <div className="first">
              <h3>Price</h3>
              <ul>
                <li>Price:- Rs. {price}</li>
                <input
                  type="range"
                  id="priceRange"
                  name=""
                  max={9999}
                  min={99}
                  value={price}
                  onChange={handlePriceChange}
                />
              </ul>
            </div>
          </div>
          <div className="productsPage">
            <h1>Products</h1>
            <div className="products">
              {products.map((product, index) => (
                <div key={index} className="product">
                  <Link to={`/productbuy/${product._id}`}>
                    <figure>
                      <img
                        height={100}
                        width={300}
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
                          <span style={{ color: 'black', fontSize: '1.2rem' }}>
                            <b> ₹{product.price} </b>
                          </span>{' '}
                          <strike>${90000}</strike>
                        </p>
                      </figcaption>
                    </figure>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      <br />
      <br />
      <br />
    </div>
  );
}

export default Products;
