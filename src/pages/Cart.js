import React, { useState } from 'react';

function Cart() {
  const [cart, setCart] = useState([
    { id: '4544343434', productName: 'Realme smartphone', description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, Lorem, ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dolorum doloribus blanditiis eos.', pruductId: '48747545', quantity: 2,price:299.00 },
    { id: '4548954', productName: 'Realme smartphone', description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, Lorem, ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dolorum doloribus blanditiis eos.', pruductId: '434747543', quantity: 6,price:299.00 },
  ]);
  const decreaseCount = (id) => {
    const newCart = cart.map((item) => {
      if (item.id === id) {
        let newQuantity = item.quantity > 1 ? item.quantity - 1 : 1;
        return { ...item, quantity: newQuantity }
      }
      return item;
    });
    setCart(newCart);
  };

  const increaseCount = (id) => {
    const newCart = cart.map((item) => {
      if (item.id === id) {
        let newQuantity = item.quantity + 1;
        return { ...item, quantity: newQuantity }
      }
      return item;
    });
    setCart(newCart);
  };
  return (
    <div className="cart-container">
      <div className="cart">
        <br />
        <div className="cart-items">
          <h1>Cart ({cart.length})</h1>
          {cart.map((item, index) => {
            return <div className="cart-item" key={index}>
              <div className="item-image">
                <img src="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/8/u/s/-original-imagkp8yreabrzh2.jpeg?q=70" alt="Product 1" />
              </div>
              <div className="item-description">
                <div className="product-name">
                  <h2>{item.productName}</h2>
                </div>
                <div className="product-description">
                  <div className="item-price">
                    Price:- <b>{item.price}</b>
                  </div>
                  Save 5%
                  <br />
                  <b style={{ color: 'green' }}>
                    In stock
                  </b>
                  <br />
                  Sold by Nirmal Handicrafts
                  Amazon Delivered
                </div>
              </div>
              <div className="cart-right">

                <div className="quantity">
                  <div className="quantity-container">
                    <button className="quantity-button" onClick={() => { decreaseCount(item.id) }}>-</button>
                    <input type="number" className="count-input" value={item.quantity} readOnly />
                    <button className="quantity-button" onClick={() => { increaseCount(item.id) }}>+</button>
                  </div>
                </div>
                <div className="button">
                  <button>Remove</button>
                </div>
              </div>
            </div>

          })}
        </div>
        <div className="checkout">
          <p>
          <b style={{color:'green'}}>Part of your order qualifies for FREE Delivery. <br />
             Select this option at checkout. Details </b>
             <br />
             <br />
            Subtotal (10 items)
            <br />
            <br />
            <b>
              Totle:- 3,603.00
              </b>
              </p>
          <button>Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
