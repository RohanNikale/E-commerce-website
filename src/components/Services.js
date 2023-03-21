import React from 'react'
import service1 from '../icons/service.png'
import service2 from '../icons/service-02.png'
import service3 from '../icons/service-03.png'
import service4 from '../icons/service-04.png'
import service5 from '../icons/service-05.png'
export default function Services() {
    return (
        <div>
            <div className="services">
                <div className="service">
                    <img src={service1} alt="" />
                    <div className="text">
                        <h4>
                            Free shipping
                        </h4>
                        <p>
                        We ship all over India for FREE.
                        </p>
                    </div>
                </div>
                <div className="service">
                    <img src={service3} alt="" />
                    <div className="text">
                        <h4>
                            Support 24/7
                        </h4>
                        <p>
                            Shop with expert
                        </p>
                    </div>
                </div>

                <div className="service">
                    <img src={service5} alt="" /> 
                    <div className="text">
                        <h4>
                            Secure Payments
                        </h4>
                        <p>
                            100% Protected Payments
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
