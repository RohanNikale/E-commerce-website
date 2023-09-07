import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../AuthContext'
import loader from '../icons/loader.gif'


function ProuducBuypage() {
  const { API_URL } = useAuth()
  const [Loading, setLoading] = useState(true);

  const { id } = useParams();
  const [productData, setProductData] = useState({
    user: '6431a7d25b7366bacf903546',
    productImages: [
      {
        fieldname: 'images',
        originalname: '-original-imagdgumyuesnvhg.webp',
        encoding: '7bit',
        mimetype: 'image/webp',
        destination: 'productimages/electrictronicsImages',
        filename: 'e23655e5095c12bb58e7ec4d26a3acbf',
        path: 'productimages\\electrictronicsImages\\e23655e5095c12bb58e7ec4d26a3acbf',
        size: 5240,
      },
    ],
    title: 'boAt Airdopes 131 with up to 60 Hours and ASAP Charge Bluetooth Headset (Active Black, True Wireless)',
    productName: 'headphone',
    description:
      'Are you looking for a wireless earbud-type headset that delivers an impressive playback time? If your answer is yes, bring home the boAt Airdopes 131 that comes with a carrying case. This carrying case also acts as a 650 mAh portable charger that extends the playback time of these earbuds by up to 15 hours, i.e. 4 times its normal charging capacity. The normal battery capacity of each of these earbuds is 40 mAh and this delivers up to 3 hours of playback time. These earbuds feature Bluetooth v5.0 technology that delivers a stable connection that lets you rock on without connectivity issues. The stereo calling feature of these earbuds allows you to enjoy calls via its built-in microphone and 13-mm drivers. These earbuds are powered up by the IWP Technology featured in them the moment you open the case. The presence of a Type-C charging port ensures you can easily charge it with any charger that has a compatible cable.',
    price: '899',
    type: 'Accessories',
    stocks: '33',
    __v: 0,
  });

  useEffect(() => {
    fetch(`${API_URL}/product/getproductinfo/${id}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((res) => res.json())
      .then((data) => {setProductData(data.product)
        setLoading(false)
      });
  }, [id]);

  return (
    <div className="productpage">
            {Loading ? (
        <div className="loader">
          <img src={loader} alt='loader'/>
        </div>
      ) : (
      <div className="uperproduct">

        <div className="productimage">
          <center>
            <img
              src={`${API_URL}/product/${productData.productImages[0].destination}/${productData.productImages[0].filename}`}
              alt=""
            />
          </center>
        </div>
        <div className="productdata">
          <div className="title">
            <h1>{productData.title}</h1>
          </div>
          <div className="price">
            <h2>{productData.price} - 50%</h2>
          </div>
          <div className="buy">
            <button>Buy</button>
            <button>Add To Cart</button>
          </div>
          <div className="description">
            <h3>Product Info:</h3>
            <br />
            {productData.description}
          </div>
        </div>
      </div>)}
    </div>
  );
}

export default ProuducBuypage;
