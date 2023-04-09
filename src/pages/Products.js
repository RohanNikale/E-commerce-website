import React, { useEffect, useState } from 'react'

import tshirt1 from '../products/products/men/tshirt1.webp'
import tshirt2 from '../products/products/men/tshirt2.webp'
import tshirt3 from '../products/products/men/tshirt3.jpeg'
import tshirt4 from '../products/products/men/tshirt4.webp'
// import tshirt5 from '../products/products/men/tshirt5.webp'
// import tshirt6 from '../products/products/men/tshirt6.jpg'


import { useParams } from "react-router-dom";


function Products() {
    
    // price range
    const [price, setPrice] = useState(999)

    const priceRange = (e) => {
        let a = document.getElementById('priceRange').value
        setPrice(a)
    }

    // to acces slug

    const { type } = useParams()
    useEffect(() => {
        console.log(type)
    })

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
                        <div className="product">
                            <figure>
                                <img src={tshirt1} alt="" />
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
                        <div className="product">
                            <figure>
                                <img src={tshirt2} alt="" />
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
                        <div className="product">
                            <figure>
                                <img src={tshirt3} alt="" />
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
                        <div className="product">
                            <figure>
                                <img src={tshirt4} alt="" />
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

                        <div className="product">
                            <figure>
                                <img src={tshirt1} alt="" />
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
                        <div className="product">
                            <figure>
                                <img src={tshirt2} alt="" />
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
                        <div className="product">
                            <figure>
                                <img src={tshirt3} alt="" />
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
                        </div>                        <div className="product">
                            <figure>
                                <img src={tshirt1} alt="" />
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
                        <div className="product">
                            <figure>
                                <img src={tshirt2} alt="" />
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
                        <div className="product">
                            <figure>
                                <img src={tshirt3} alt="" />
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
                        </div>                        <div className="product">
                            <figure>
                                <img src={tshirt1} alt="" />
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
                        <div className="product">
                            <figure>
                                <img src={tshirt2} alt="" />
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
                        <div className="product">
                            <figure>
                                <img src={tshirt3} alt="" />
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
                        </div>                        <div className="product">
                            <figure>
                                <img src={tshirt1} alt="" />
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
                        <div className="product">
                            <figure>
                                <img src={tshirt2} alt="" />
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
                        <div className="product">
                            <figure>
                                <img src={tshirt3} alt="" />
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
                        </div>                        <div className="product">
                            <figure>
                                <img src={tshirt1} alt="" />
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
                        <div className="product">
                            <figure>
                                <img src={tshirt2} alt="" />
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
                        <div className="product">
                            <figure>
                                <img src={tshirt3} alt="" />
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
                        </div>                        <div className="product">
                            <figure>
                                <img src={tshirt1} alt="" />
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
                        <div className="product">
                            <figure>
                                <img src={tshirt2} alt="" />
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
                        <div className="product">
                            <figure>
                                <img src={tshirt3} alt="" />
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
                        </div>                        <div className="product">
                            <figure>
                                <img src={tshirt1} alt="" />
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
                        <div className="product">
                            <figure>
                                <img src={tshirt2} alt="" />
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
                        <div className="product">
                            <figure>
                                <img src={tshirt3} alt="" />
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
                        </div>                        <div className="product">
                            <figure>
                                <img src={tshirt1} alt="" />
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
                        <div className="product">
                            <figure>
                                <img src={tshirt2} alt="" />
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
                        <div className="product">
                            <figure>
                                <img src={tshirt3} alt="" />
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
                        </div>                        <div className="product">
                            <figure>
                                <img src={tshirt1} alt="" />
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
                        <div className="product">
                            <figure>
                                <img src={tshirt2} alt="" />
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
                        <div className="product">
                            <figure>
                                <img src={tshirt3} alt="" />
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
                        </div>                        <div className="product">
                            <figure>
                                <img src={tshirt1} alt="" />
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
                        <div className="product">
                            <figure>
                                <img src={tshirt2} alt="" />
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
                        <div className="product">
                            <figure>
                                <img src={tshirt3} alt="" />
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
