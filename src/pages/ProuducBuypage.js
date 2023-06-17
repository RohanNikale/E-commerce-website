import React, { useEffect, useState } from 'react'
import img from '../images/applewatch.png'
import Featuredcollection from '../components/Featuredcollection';
import { useParams } from 'react-router-dom';







import earbuds from '../products/category/earbuds.jpg'
import gaming from '../products/category/gaming.jpg'
import home from '../products/category/home.jpg'
import phone from '../products/category/phone.jpg'
import speaker from '../products/category/speaker.jpg'
import headphone from '../products/category/headphone.jpg'
import video from '../images/applewatch.mp4'
// import applewatchbanner from '../images/applewatchbanner.jpg'
import applewatch from '../images/applewatch.jpg'






function ProuducBuypage() {
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
        size: 5240
      }
    ],
    title: 'boAt Airdopes 131 with upto 60 Hours and ASAP Charge Bluetooth Headset  (Active Black, True Wireless)',
    productName: 'headphone',
    description: '\n' +
      'Are you looking for a wireless earbud-type headset that delivers an impressive playback time? If your answer is yes, bring home the boAt Airdopes 131 that comes with a carrying case. This carrying case also acts as a 650 mAh portable charger that extends the playback time of these earbuds by up to 15 hours, i.e. 4 times its normal charging capacity. The normal battery capacity of each of these earbuds is 40 mAh and this delivers up to 3 hours of playback time. These earbuds feature Bluetooth v5.0 technology that delivers a stable connection that lets your rock on without connectivity issues. The stereo calling feature of these earbuds allows you to enjoy calls via its built-in microphone and 13-mm drivers. These earbuds are powered up by the IWP Technology featured in them the moment you open the case. The presence of a Type-C charging port ensures you can easily charge it with any charger that has a compatible cable.',
    price: '899',
    type: 'Accessories',
    stoks: '33',
    __v: 0

  })
  const { id } = useParams()
  useEffect(() => {
    fetch(`http://localhost:8000/getproductinfo`, {
      method: 'POST',
      body: JSON.stringify({
        productId: id
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    }).then((res) => {
      // console.log('enter')
      return res.json()
    }).then((data) => {
      setProductData(data)
    })

  }, [id])
  return (
    <div>
      <div className="productpage">
        <div className="uperproduct">

          <div className="productimage">
            <img src={`http://localhost:8000/${productData.productImages[0].destination}/${productData.productImages[0].filename}`} alt="" />
          </div>
          <div className="productdata">
            <div className="title">
              <h1>{productData.title}</h1>
            </div>
            <div className="price">
              <h2>{productData.price} -50%</h2>
            </div>
            <div className="buy">
              <button>Buy</button>
              <button>Add To Cart</button>
            </div>
            <div className="description">
              <h3>Product Info:-</h3>
              <br />
              {productData.description}
            </div>
          </div>
        </div>
      </div>

      <div className="cardsmain">

        <br />
        <h1>Featured Collection</h1>
        <br />
        <div className="cards">
          <div className="card">
            <figure>
              <img src={phone} alt="" />
              <figcaption>
                <h4>

                  {'Apple iPhone 14 (512 GB) - Blue'.slice(0, 20) + '.....'}
                </h4>
                <br />
                <div className="rating" style={{ color: 'gold' }}>
                  <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                </div>
                <br />
                <p>Price:-<span style={{ color: 'red', fontSize: '1.2rem' }}><b> ${'348'} </b> </span> <strike>${'890'}</strike></p>
              </figcaption>
            </figure>
          </div>
          <div className="card">
            <figure>
              <img src={earbuds} alt="" />
              <figcaption>
                <h4>

                  {'Noise air pod'.slice(0, 19) + '.....'}
                </h4>
                <br />
                <div className="rating" style={{ color: 'gold' }}>
                  <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                </div>
                <br />
                <p>Price:-<span style={{ color: 'red', fontSize: '1.2rem' }}><b> ${'348'} </b> </span> <strike>${'890'}</strike></p>
              </figcaption>
            </figure>
          </div>
          <div className="card">
            <figure>
              <img src={headphone} alt="" />
              <figcaption>
                <h4>

                  {'headphones google'.slice(0, 19) + '.....'}
                </h4>
                <br />
                <div className="rating" style={{ color: 'gold' }}>
                  <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                </div>
                <br />
                <p>Price:-<span style={{ color: 'red', fontSize: '1.2rem' }}><b> ${'348'} </b> </span> <strike>${'890'}</strike></p>
              </figcaption>
            </figure>
          </div>
          <div className="card">
            <figure>
              <img src={gaming} alt="" />
              <figcaption>
                <h4>
                  {'ps5 controller'.slice(0, 19) + '.....'}
                </h4>
                <br />
                <div className="rating" style={{ color: 'gold' }}>
                  <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                </div>
                <br />
                <p>Price:-<span style={{ color: 'red', fontSize: '1.2rem' }}><b> ${'348'} </b> </span> <strike>${'890'}</strike></p>
              </figcaption>
            </figure>
          </div>
          <div className="card">
            <figure>
              <img src={speaker} alt="" />
              <figcaption>
                <h4>

                  {'boat blottoth speaker'.slice(0, 19) + '.....'}
                </h4>
                <br />
                <div className="rating" style={{ color: 'gold' }}>
                  <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                </div>
                <br />
                <p>Price:-<span style={{ color: 'red', fontSize: '1.2rem' }}><b> ${'348'} </b> </span> <strike>${'890'}</strike></p>
              </figcaption>
            </figure>
          </div>
          <div className="card">
            <figure>
              <img src={home} alt="" />
              <figcaption>
                <h4>

                  {'home applinces'.slice(0, 19) + '.....'}
                </h4>
                <br />
                <div className="rating" style={{ color: 'gold' }}>
                  <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                </div>
                <br />
                <p>Price:-<span style={{ color: 'red', fontSize: '1.2rem' }}><b> ${'348'} </b> </span> <strike>${'890'}</strike></p>
              </figcaption>
            </figure>
          </div>

        </div>

      </div>


      <div className="cardsmain">

        <br />
        <h1>Featured Collection</h1>
        <br />
        <div className="cards">
          <div className="card">
            <figure>
              <img src={phone} alt="" />
              <figcaption>
                <h4>

                  {'Apple iPhone 14 (512 GB) - Blue'.slice(0, 20) + '.....'}
                </h4>
                <br />
                <div className="rating" style={{ color: 'gold' }}>
                  <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                </div>
                <br />
                <p>Price:-<span style={{ color: 'red', fontSize: '1.2rem' }}><b> ${'348'} </b> </span> <strike>${'890'}</strike></p>
              </figcaption>
            </figure>
          </div>
          <div className="card">
            <figure>
              <img src={earbuds} alt="" />
              <figcaption>
                <h4>

                  {'Noise air pod'.slice(0, 19) + '.....'}
                </h4>
                <br />
                <div className="rating" style={{ color: 'gold' }}>
                  <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                </div>
                <br />
                <p>Price:-<span style={{ color: 'red', fontSize: '1.2rem' }}><b> ${'348'} </b> </span> <strike>${'890'}</strike></p>
              </figcaption>
            </figure>
          </div>
          <div className="card">
            <figure>
              <img src={headphone} alt="" />
              <figcaption>
                <h4>

                  {'headphones google'.slice(0, 19) + '.....'}
                </h4>
                <br />
                <div className="rating" style={{ color: 'gold' }}>
                  <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                </div>
                <br />
                <p>Price:-<span style={{ color: 'red', fontSize: '1.2rem' }}><b> ${'348'} </b> </span> <strike>${'890'}</strike></p>
              </figcaption>
            </figure>
          </div>
          <div className="card">
            <figure>
              <img src={gaming} alt="" />
              <figcaption>
                <h4>
                  {'ps5 controller'.slice(0, 19) + '.....'}
                </h4>
                <br />
                <div className="rating" style={{ color: 'gold' }}>
                  <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                </div>
                <br />
                <p>Price:-<span style={{ color: 'red', fontSize: '1.2rem' }}><b> ${'348'} </b> </span> <strike>${'890'}</strike></p>
              </figcaption>
            </figure>
          </div>
          <div className="card">
            <figure>
              <img src={speaker} alt="" />
              <figcaption>
                <h4>

                  {'boat blottoth speaker'.slice(0, 19) + '.....'}
                </h4>
                <br />
                <div className="rating" style={{ color: 'gold' }}>
                  <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                </div>
                <br />
                <p>Price:-<span style={{ color: 'red', fontSize: '1.2rem' }}><b> ${'348'} </b> </span> <strike>${'890'}</strike></p>
              </figcaption>
            </figure>
          </div>
          <div className="card">
            <figure>
              <img src={home} alt="" />
              <figcaption>
                <h4>

                  {'home applinces'.slice(0, 19) + '.....'}
                </h4>
                <br />
                <div className="rating" style={{ color: 'gold' }}>
                  <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                </div>
                <br />
                <p>Price:-<span style={{ color: 'red', fontSize: '1.2rem' }}><b> ${'348'} </b> </span> <strike>${'890'}</strike></p>
              </figcaption>
            </figure>
          </div>

        </div>

      </div>
    </div>
  )
}

export default ProuducBuypage
