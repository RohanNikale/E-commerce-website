import React from 'react'
import camera from '../products/category/camera.jpg'
import earbuds from '../products/category/earbuds.jpg'
import gaming from '../products/category/gaming.jpg'
import home from '../products/category/home.jpg'
import laptop from '../products/category/laptop.jpg'
import phone from '../products/category/phone.jpg'
import smarttv from '../products/category/smarttv.jpg'
import speaker from '../products/category/speaker.jpg'
import watch from '../products/category/watch.jpg'
import headphone from '../products/category/headphone.jpg'
import { Link } from 'react-router-dom'
const Category = () => {
  return (
    <div>
      <div className="categoryBg">

        <div className="category">

          <div className="product">
            <div className='producttext'>
        <Link to="/product/Camerasvideos">
              <h3>Cameras & videos</h3>
              <p>156 items</p>
          </Link>
              </div>
            <img src={camera} alt="product" />
          </div>
          <div className="product">
            <div className='producttext'>
          <Link to="/product/Accessories">
              <h3>Accessories</h3>
              <p>278 items</p>
          </Link>
              </div>
            <img src={earbuds} alt="product" />
          </div>
          <div className="product">
              
            <div className='producttext'>
            <Link to="/product/musicgamming">
              <h3>Music & Gamming</h3>
              <p>789 items</p>
            </Link>
              </div>
            <img src={gaming} alt="product" />
          </div>
              
          <div className="product">
            <div className='producttext'>
            <Link to="/product/homeappliances">
              <h3>Home Applinces</h3>
              <p>2099 items</p>
            </Link>
              </div>
            <img src={home} alt="product" />
          </div>

          <div className="product" style={{borderRight:'none'}}>

            <div className='producttext'>
            <Link to="/product/laptopcomputer">
              <h3>Laptop & Computer</h3>
              <p>734 items</p>
            </Link>
              </div>
            <img src={laptop} alt="product" />
          </div>

          <div className="product" style={{borderBottom:'none'}}>
            <div className='producttext'>
            <Link to="/product/mobiletablet">
              <h3>Mobile's & tablet's</h3>
              <p>678 items</p>
            </Link>
              </div>
            <img src={phone} alt="product" />
          </div>
          <div className="product" style={{borderBottom:'none'}}>
            <div className='producttext'>
            <Link to="/product/smarttelevision">
              <h3>Smart Television</h3>
              <p>3784 items</p>
            </Link>
              </div>
            <img src={smarttv} alt="product" />
          </div>
          <div className="product" style={{borderBottom:'none'}}>
            <div className='producttext'>
            <Link to="/product/speakersound">
              <h3>Speaker's & Sound's</h3>
              <p>567 items</p>
            </Link>
              </div>
            <img src={speaker} alt="product" />
          </div>
          <div className="product" style={{borderBottom:'none'}}>
            <div className='producttext'>
            <Link to="/product/Watch">
              <h3>Watch's</h3>
              <p>786 items</p>
            </Link>
              </div>
            <img src={watch} alt="product" />
          </div>
          <div className="product" style={{borderBottom:'none',borderRight:'none'}}>
            <div className='producttext'>
            <Link to="/product/headphoneairbud">
              <h3>Headphone's & Airbuds</h3>
              <p>678 items</p>
            </Link>
              </div>
            <img src={headphone} alt="product" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Category
