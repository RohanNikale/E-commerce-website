import React, { useEffect, useState } from 'react'

import tshirt1 from '../products/products/men/tshirt1.webp'

// import tshirt5 from '../products/products/men/tshirt5.webp'
// import tshirt6 from '../products/products/men/tshirt6.jpg'


import { Link, useParams } from "react-router-dom";


function Products() {
    
    // price range
    const [price, setPrice] = useState(999)
    const [Products,setProducts] = useState([{
        "_id": {
          "$oid": "6453594acec30a99a10e6791"
        },
        "user": "6431a7d25b7366bacf903546",
        "productImages": [
          {
            "fieldname": "images",
            "originalname": "81S8jikRzGL._SL1500_.jpg",
            "encoding": "7bit",
            "mimetype": "image/jpeg",
            "destination": "productimages/electrictronicsImages",
            "filename": "fb582b8f0a95172b4140576186896c87",
            "path": "productimages\\electrictronicsImages\\fb582b8f0a95172b4140576186896c87",
            "size": 203353
          },

        ],
        "title": "",
        "productName": "",
        "description": "",
        "price": "",
        "type": "",
        "stoks": "",
        "__v": 0
      }])
    const priceRange = (e) => {
        let a = document.getElementById('priceRange').value
        setPrice(a)
    }

    // to acces slug

    const { type } = useParams()
    useEffect(() => {

            fetch(`http://localhost:8000/getproducts/${type}`,{
                method:'POST',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            }).then((res)=>{
                return res.json()
            }).then((data)=>{
                setProducts(data)
            })
            // console.log(Products)

    },[setProducts])

    return (
        <div className='productBg'>
            <div className="prouctMain">
                <div className="fillter">
                    <h1>Fillter</h1>
                    <hr />
                    <div className="first">
                        <h3>Color</h3>
                        <ul>
                            <li><label><input type="checkbox" name="" id="" /> color</label></li>
                            <li><label><input type="checkbox" name="" id="" /> color</label></li>
                            <li><label><input type="checkbox" name="" id="" /> color</label></li>
                            <li><label><input type="checkbox" name="" id="" /> color</label></li>
                        </ul>
                    </div>
                    <hr />
                    <div className="first">

                        <h3>Category</h3>
                        <ul>
                            <li><label><input type="checkbox" name="" id="" /> CATEGORIES</label></li>
                            <li><label><input type="checkbox" name="" id="" /> CATEGORIES</label></li>
                            <li><label><input type="checkbox" name="" id="" /> CATEGORIES</label></li>
                            <li><label><input type="checkbox" name="" id="" /> CATEGORIES</label></li>
                        </ul>
                    </div>
                    <hr />
                    <div className="first">
                        <h3>Price</h3>
                        <ul>
                            <li>Price:- Rs. {price}</li>
                            <input type="range" id='priceRange' name="" max={9999} min={99} onChange={priceRange} />
                        </ul>
                    </div>

                </div>
                <div className="productsPage">
                    <h1>Fashion Collection</h1>
                    <div className="products">
                        {
                            Products.map((arr,index)=>{
                                return <Link to={`/productbuy/${arr._id}`}>
                                <div key={index} className="product">
                            <figure>
                                <img height={100} width={300} src={`http://localhost:8000/${arr.productImages[0].destination}/${arr.productImages[0].filename}`} alt="" />
                                <figcaption>
                                    <h4>

                                        {arr.title.slice(0, 20) + '.....'}
                                    </h4>
                                    <br />
                                    <div className="rating" style={{ color: 'gold' }}>
                                        <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                                    </div>
                                    <br />
                                    <p>Price:-<span style={{ color: 'black', fontSize: '1.2rem' }}><b> ₹{arr.price} </b> </span> <strike>${90000}</strike></p>
                                </figcaption>
                            </figure>
                        </div>
                                    </Link> 

})
}


                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
        </div>
    )
}

export default Products
