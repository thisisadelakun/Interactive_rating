import React from 'react'
import thankyou from '../assets/illustration-thank-you.svg'

const Success = ({showCard1}) => {
    return (
        <div>
            <div className='card-2' id='card-2'>
                <div className='card-header-image'>
                    <img src={thankyou} alt="thankyou_img.jpg" />
                </div>

                <div className="card-2-p">
                    <p>
                        You selected <span>{showCard1}</span> out of 5
                    </p>
                </div>

                <div className='card-2-h2'>
                    <h2>
                        Thank you!
                    </h2>
                </div>

                <div className="card-2-p2">
                    <p>
                        We appreciate you taking your time to give a rating. If you ever need more support don't hesitate
                        to get in touch!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Success