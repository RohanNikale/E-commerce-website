import React, { useEffect, useState } from 'react'








import video from '../images/applewatch.mp4'
// import applewatchbanner from '../images/applewatchbanner.jpg'
import applewatch from '../images/applewatch.jpg'


import { Link } from 'react-router-dom'


const Featuredcollection = () => {
    const [Products,setProducts]=useState([
    
        {
            "_id": "649ea7d087c65f6ec485025e",
            "user": "6431a7d25b7366bacf903546",
            "productImages": [
                {
                    "fieldname": "images",
                    "originalname": "home.10785ee964537a7dfe31.jpg",
                    "encoding": "7bit",
                    "mimetype": "image/jpeg",
                    "destination": "productimages/homeappliancesImages",
                    "filename": "783be6303cd0010aad74795e37100f2f",
                    "path": "productimages\\homeappliancesImages\\783be6303cd0010aad74795e37100f2f",
                    "size": 105854
                }
            ],
            "title": "KENT Crisp Pop Up 750 W Pop Up Toaster  (Blue)",
            "productName": "bread toster",
            "description": "Product Description\nFamily breakfast each morning is quick and effortless with the easy-to-use Kent Crisp Pop-up Toaster. Its wide slots allow the users to toast two thick slices of bread and enjoy a wholesome breakfast. Also, this pop-up toaster’s variable electronic timing control with six heating modes lets the user pick the desired crispiness while toasting. Furthermore, you can also reheat the cold toast without burning it in this appliance.\n\nSix Heating Modes\nThis pop-up toaster is integrated with variable electronic timing control with six heating modes that let you and your family members enjoy the kind of crispiness they prefer. So, they can pick from light golden brown to deep dark toast.\n\n\nReheat and Mid Cycle Stop Function\nIts reheat function allows the user to warm up cold toast without going through the entire toasting process. Also, the cancel function lets you halt the toasting process in between if you change your mind.",
            "price": "1,299",
            "type": "homeappliances",
            "featured": true,
            "stoks": "33",
            "__v": 0
        }
    ])
    useEffect(()=>{

        fetch(`http://localhost:8000/getfeaturedproduct`,{
            method:'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        }).then((res)=>{
            return res.json()
        }).then((data)=>{
            setProducts(data)
        })
        console.log(Products)
    },[])
    return (
        <div>
            <div className="cardsmain">

                <br />
                <h1>Featured Collection</h1>
                <br />

                    <div className="cards">
                {
                Products.map((arr,index)=>{
                    return  <div className="card" key={index}>
                    <Link to={`/productbuy/${arr._id}`}>
                        <figure>
                            <img src={`http://localhost:8000/${arr.productImages[0].destination}/${arr.productImages[0].filename}`} alt="" />
                            <figcaption>
                                <h4>

                                    {arr.title.slice(0, 20) + '.....'}
                                </h4>
                                <br />
                                <div className="rating" style={{ color: 'gold' }}>
                                    <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                                </div>
                                <br />
                                <p>Price:-<span style={{ color: 'red', fontSize: '1.2rem' }}><b>₹{arr.price} </b> </span> <strike>${'890'}</strike></p>
                            </figcaption>
                        </figure>
                </Link> 
                    </div>
                })}
                </div>
                <div className="secondFeatured">
                    <div className="video">
                        <video id='video' muted autoPlay loop src={video} type="video/mp4" />
                    </div>

                    <div className="productCard">
                        {/* <img src={applewatchbanner} alt="" /> */}
                        <img src={applewatch} alt="" />
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Featuredcollection
