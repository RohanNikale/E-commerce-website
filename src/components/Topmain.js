import React, { useEffect, useState } from 'react'
import DOMPurify from 'dompurify'
import mainbanner from '../images/main-banner-1.jpg'
import one from '../images/catbanner-01.jpg'
import two from '../images/catbanner-02.jpg'
import three from '../images/catbanner-03.jpg'
import four from '../images/catbanner-04.jpg'
import video from '../images/video.mp4'
export default function Topmain() {

    let [state,setState]=useState(true)
    let [sound,setSound]=useState(true)

    useEffect(() => {
        setTimeout(() => {
            try{   
                document.getElementById('video').play()
            }catch{
                setState(false)
            }
        }, 5000)
    })
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
                                <button onClick={soundplay} className='mutebutton'>{sound!==true?<i class="fa-solid fa-volume-high"></i>:<i class="fa-solid fa-volume-xmark"></i>}</button>
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
                                <button onClick={soundplay} className='buynow'>Buy now</button>
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
                                <img src={two} alt="" />
                                <figcaption><h2>Watch's</h2>
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
