import React, { useState } from 'react'
import one from '../images/catbanner-01.jpg'
import three from '../images/catbanner-03.jpg'
import four from '../images/catbanner-04.jpg'
import fashion from '../images/fashion.jpg'
import video from '../images/video.mp4'
export default function Topmain() {

    let [sound,setSound]=useState(true)

    const soundplay=()=>{
        let check=document.getElementById('video').muted
        let a=document.getElementById('video')
        if(check===false){
            a.muted=true
            setSound(true)
        }
        else if(check===true){
            a.muted=false
            setSound(false)
        }
        

    }        

    return (
        <div>
            {/* <div className="content" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(state)}}></div> */}
            <main>
                <div className="main">
                    <div className="fbanner">
                        <div className="test"></div>
                        <figure>
 {

 }
                                <button onClick={soundplay} className='mutebutton'>{sound!==true?<i className="fa-solid fa-volume-high"></i>:<i className="fa-solid fa-volume-xmark"></i>}</button>
                            <video id='video' muted autoPlay loop src={video} type="video/mp4">
                            </video>

                             {/* <img src={mainbanner} alt="" />  */}
                             <figcaption>
                                <span>SUPERCHARGED AIR POD'S</span>
                                <h1>
                                    Noise air pod's
                                </h1>
                                <br />
                                <p style={{ fontWeight: '400' }}>
                                    Starting from RS.2,999
                                </p>
                                <br />
                                <button className='buynow'>Buy now</button>
                            </figcaption> 
                        </figure>

                    </div>
                    <div className="banners">
                        <div className="firstimg">
                            <figure>
                                <img src={one} alt="" />
                                <figcaption><h2>Laptop's</h2>
                                    <p>Starting from Rs.29,000 </p>
                                    <br />
                                    <button>Explore</button>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="twoimg">
                            <figure>
                                <img src={fashion} alt="" />
                                <figcaption><h2>Men's & Woman <br /> Fashion</h2>
                                    <p>Starting from Rs.999 </p>
                                    <br />
                                    <button>Explore</button>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="three">
                            <figure>
                                <img src={three} alt="" />
                                <figcaption><h2>Tablet's</h2>
                                    <p>Starting from Rs.12,999 </p>
                                    <br />
                                    <button>Explore</button>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="four">
                            <figure>
                                <img src={four} alt="" />
                                <figcaption><h2>Headphone's</h2>
                                    <p>Starting from Rs.999 </p>
                                    <br />
                                    <button>Explore</button>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
