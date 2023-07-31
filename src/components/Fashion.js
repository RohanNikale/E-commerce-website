import React, { useEffect, useState } from 'react'





import banner from '../products/products/men/banner.webp'
import { Link } from 'react-router-dom'

export default function Fashion() {
    
    
    
    const [Products, setProducts] = useState([{
        "_id": "6453594acec30a99a10e6791",
        "user": "6431a7d25b7366bacf903546",
        "productImages": [
            {
                "fieldname": "images",
                "originalname": "81S8jikbv0zGL._SL1500_.jpg",
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
    let API_URL='https://drab-gold-shark-boot.cyclic.app'
    useEffect(() => {
        fetch(`${API_URL}/getproducts/fashion`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        }).then((res) => {
            return res.json()
        }).then((data) => {
            setProducts(data)
        })
    },[API_URL])
    return (
        <div>
            <div className="cardsmain">
                <br />
                <br />
                <br />

                <br />
                <h1>Fashion Collection</h1>
                <br />

                <div className="banenr" style={{ width: '100%' }}>
                    <img src={banner} alt="" style={{ width: '100%' }} />
                </div>

                {Products.map((arr, index) => {

                    return <Link to={`/productbuy/${arr._id}`} key={index}>
                        <div className="cards">

                            <div className="card">
                                <figure>
                                    <img src={`${API_URL}/${arr.productImages[0].destination}/${arr.productImages[0].filename}`} alt="" />
                                    <figcaption>
                                        <h4>

                                            {arr.title.slice(0, 19) + '.....'}
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
                    </Link>
                })}
            </div>
        </div>
    )
}
