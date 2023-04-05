import React from 'react'






import earbuds from '../products/category/earbuds.jpg'
import gaming from '../products/category/gaming.jpg'
import home from '../products/category/home.jpg'
import phone from '../products/category/phone.jpg'
import speaker from '../products/category/speaker.jpg'
import headphone from '../products/category/headphone.jpg'
import video from '../images/applewatch.mp4'
// import applewatchbanner from '../images/applewatchbanner.jpg'
import applewatch from '../images/applewatch.jpg'



import tshirt1 from '../products/products/men/tshirt1.webp'
import tshirt2 from '../products/products/men/tshirt2.webp'
import tshirt3 from '../products/products/men/tshirt3.jpeg'
import tshirt4 from '../products/products/men/tshirt4.webp'
import tshirt5 from '../products/products/men/tshirt5.webp'
import tshirt6 from '../products/products/men/tshirt6.jpg'

import banner from '../products/products/men/banner.webp'


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
                                <p>Price:-<span style={{ color: 'red', fontSize: '1.2rem' }}><b> ${'348'} </b> </span> <strike>${'890'}</strike></p>
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
                                <p>Price:-<span style={{ color: 'red', fontSize: '1.2rem' }}><b> ${'348'} </b> </span> <strike>${'890'}</strike></p>
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
                                <p>Price:-<span style={{ color: 'red', fontSize: '1.2rem' }}><b> ${'348'} </b> </span> <strike>${'890'}</strike></p>
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
                                <p>Price:-<span style={{ color: 'red', fontSize: '1.2rem' }}><b> ${'348'} </b> </span> <strike>${'890'}</strike></p>
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
                                <p>Price:-<span style={{ color: 'red', fontSize: '1.2rem' }}><b> ${'348'} </b> </span> <strike>${'890'}</strike></p>
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
                                <p>Price:-<span style={{ color: 'red', fontSize: '1.2rem' }}><b> ${'348'} </b> </span> <strike>${'890'}</strike></p>
                            </figcaption>
                        </figure>
                    </div>

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


                <div className="cards">
                    <div className="card">
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
                    <div className="card">
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
                    <div className="card">
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
                    <div className="card">
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
                    <div className="card">
                        <figure>
                            <img src={tshirt5} alt="" />
                            <figcaption>
                                <h4>

                                    {'boat blottoth speaker'.slice(0, 19) + '.....'}
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
                    <div className="card">
                        <figure>
                            <img src={tshirt6} alt="" />
                            <figcaption>
                                <h4>

                                    {'home applinces'.slice(0, 19) + '.....'}
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
                    <div className="card">
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
                    <div className="card">
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
                    <div className="card">
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
                    <div className="card">
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
                    <div className="card">
                        <figure>
                            <img src={tshirt5} alt="" />
                            <figcaption>
                                <h4>

                                    {'boat blottoth speaker'.slice(0, 19) + '.....'}
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
                    <div className="card">
                        <figure>
                            <img src={tshirt6} alt="" />
                            <figcaption>
                                <h4>

                                    {'home applinces'.slice(0, 19) + '.....'}
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
    )
}

export default Featuredcollection
