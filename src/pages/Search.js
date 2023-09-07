import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import loader from '../icons/loader.gif'
import { useAuth } from '../AuthContext'



function Products() {
  const {API_URL}=useAuth()
  const [Loading, setLoading] = useState(true);
  const { query } = useParams();
  const [searchProduct, setSearchProduct] = useState([]);
  const [price, setPrice] = useState(999);

  useEffect(() => {
    setLoading(true)
    fetch(`${API_URL}/product/search/${query}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((res) => res.json())
      .then((data) =>{ 
        setSearchProduct(data.searchProducts)
        setLoading(false)
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, [query]);

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  return (
    <div className="productBg">
            {Loading ? (
        <div className="loader">
          <img src={loader} alt='loader' />
        </div>
      ) : (<div className="prouctMain">
        <div className="fillter">
          <h1>Filter</h1>
          <hr />
          <div className="first">
            <h3>Color</h3>
            <ul>
              <li>
                <label>
                  <input type="checkbox" name="" id="" /> color
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" name="" id="" /> color
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" name="" id="" /> color
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" name="" id="" /> color
                </label>
              </li>
            </ul>
          </div>
          <hr />
          <div className="first">
            <h3>Category</h3>
            <ul>
              <li>
                <label>
                  <input type="checkbox" name="" id="" /> CATEGORIES
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" name="" id="" /> CATEGORIES
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" name="" id="" /> CATEGORIES
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" name="" id="" /> CATEGORIES
                </label>
              </li>
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
          <h1>Search results:- {query}</h1>
          <div className="products">
            {searchProduct.map((product, index) => (
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
      </div>)}
      <br />
      <br />
      <br />
    </div>
  );
}

export default Products;
