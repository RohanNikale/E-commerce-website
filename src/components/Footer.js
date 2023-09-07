import React from 'react';

export default function Footer() {
  return (
    <div>
      <footer>
        <div className="footer">
          <div className="first">
            <h3>onKart</h3>
            <ul>
              <li>Home</li>
              <li>About</li>
            </ul>
          </div>

          <div className="second">
            <h3>Shop</h3>
            <ul>
              <li>Phones</li>
              <li>Gaming</li> {/* Corrected typo 'Gamming' to 'Gaming' */}
              <li>Fashion</li>
              <li>Headphones</li>
            </ul>
          </div>

          <div className="third">
            <h3>CUSTOMER SERVICE</h3>
            <ul>
              <li>Contact Us</li>
              <li>About Us</li>
              <li>Return Policy</li>
            </ul>
          </div>

          <div className="fourth"> {/* Corrected 'fourt' to 'fourth' */}
            <h3>Social</h3>
            <ul>
              <a href="https://www.linkedin.com/in/rohan-nikale-a1a1b922a/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i></a> {/* Corrected 'fa-brands' to 'fab' */}
              <a href="https://twitter.com/rohan_nikale" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i></a>
              <a href="https://www.instagram.com/rohannikale7/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i></a>
              <a href="https://www.facebook.com/RohanNikale07/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i></a>
              <a href="https://www.github.com/rohannikale/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
            </ul>
          </div>
        </div>
      </footer>
      <div className="copyright">
        All Copyrights Reserved By &nbsp; <a href="https://www.linkedin.com/in/rohan-nikale-a1a1b922a/" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}> Rohan Nikale </a>
      </div>
    </div>
  );
}
