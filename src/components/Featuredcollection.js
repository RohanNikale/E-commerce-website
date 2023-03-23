import React from 'react'






import earbuds from '../products/category/earbuds.jpg'
import gaming from '../products/category/gaming.jpg'
import home from '../products/category/home.jpg'
import phone from '../products/category/phone.jpg'
import speaker from '../products/category/speaker.jpg'
import headphone from '../products/category/headphone.jpg'



const Featuredcollection = () => {
    return (
        <div>
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
                                <p>Price:-<span style={{ color: 'red', fontSize:'1.2rem'}}><b> ${'348'} </b> </span> <strike>${'890'}</strike></p>
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
                                <p>Price:-<span style={{ color: 'red', fontSize:'1.2rem'}}><b> ${'348'} </b> </span> <strike>${'890'}</strike></p>
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
                                <p>Price:-<span style={{ color: 'red', fontSize:'1.2rem'}}><b> ${'348'} </b> </span> <strike>${'890'}</strike></p>
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
                                <p>Price:-<span style={{ color: 'red', fontSize:'1.2rem'}}><b> ${'348'} </b> </span> <strike>${'890'}</strike></p>
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
                                <p>Price:-<span style={{ color: 'red', fontSize:'1.2rem'}}><b> ${'348'} </b> </span> <strike>${'890'}</strike></p>
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
                                <p>Price:-<span style={{ color: 'red', fontSize:'1.2rem'}}><b> ${'348'} </b> </span> <strike>${'890'}</strike></p>
                            </figcaption>
                        </figure>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Featuredcollection
