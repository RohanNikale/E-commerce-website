import React, { useEffect, useState } from 'react'
import { useAuth } from '../AuthContext'


import banner from '../products/products/men/banner.webp'
import { Link } from 'react-router-dom'

export default function Fashion() {
    const {API_URL}=useAuth()
    
    
    
    const [Products, setProducts] = useState([])
    useEffect(() => {
        fetch(`${API_URL}/product/getproductsList/fashion`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        }).then((res) => {
            return res.json()
        }).then((data) => {
            setProducts(data.productlist)
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
                                    <img src={`${API_URL}/product/${arr.productImages[0].destination}/${arr.productImages[0].filename}`} alt="" />
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
