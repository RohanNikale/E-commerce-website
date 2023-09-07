import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import one from '../images/catbanner-01.jpg';
import three from '../images/catbanner-03.jpg';
import four from '../images/catbanner-04.jpg';
import fashion from '../images/fashion.jpg';
import video from '../images/video.mp4';
import poster from '../images/main-banner-1.jpg'
export default function Topmain() {
  const [sound, setSound] = useState(true);
  const videoRef = useRef(null);

  const soundplay = () => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.muted = !videoElement.muted;
      setSound(!videoElement.muted);
    }
  };

  return (
    <div>
      <main>
        <div className="main">
          <div className="fbanner">
            <div className="test"></div>
            <figure>
              <button onClick={soundplay} className="mutebutton">
                {sound ? <i className="fa-solid fa-volume-high"></i> : <i className="fa-solid fa-volume-xmark"></i>}
              </button>
              <video
                id="video"
                muted
                autoPlay
                loop
                src={video}
                type="video/mp4"
                ref={videoRef}
                poster={poster}
              ></video>
              <figcaption>
                <span>SUPERCHARGED AIR POD'S</span>
                <h1>Noise air pod's</h1>
                <br />
                <p style={{ fontWeight: '400' }}>Starting from RS.2,999</p>
                <br />
                <button className="buynow">Buy now</button>
              </figcaption>
            </figure>
          </div>
          <div className="banners">
            <div className="firstimg">
              <figure>
                <img src={one} alt="" />
                <figcaption>
                  <h2>Laptop's</h2>
                  <p>Starting from Rs.29,000 </p>
                  <br />
                  <Link to="/product/laptopcomputer">
                    <button>Explore</button>
                  </Link>
                </figcaption>
              </figure>
            </div>
            <div className="twoimg">
              <figure>
                <img src={fashion} alt="" />
                <figcaption>
                  <h2>Men's & Woman Fashion</h2>
                  <p>Starting from Rs.999 </p>
                  <br />
                  <Link to="/product/fashion">
                    <button>Explore</button>
                  </Link>
                </figcaption>
              </figure>
            </div>
            <div className="three">
              <figure>
                <img src={three} alt="" />
                <figcaption>
                  <h2>Mobile & Tablet's</h2>
                  <p>Starting from Rs.12,999 </p>
                  <br />
                  <Link to="/product/mobiletablet">
                    <button>Explore</button>
                  </Link>
                </figcaption>
              </figure>
            </div>
            <div className="four">
              <figure>
                <img src={four} alt="" />
                <figcaption>
                  <h2>Headphone's</h2>
                  <p>Starting from Rs.999 </p>
                  <br />
                  <Link to="/product/headphoneairbud">
                    <button>Explore</button>
                  </Link>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
