import React, { useState } from 'react';
import star from '../assets/icon-star.svg';

const Card = ({showCard1, setShowCard1, setShowCard2}) => {
  const [activeNumber, setActiveNumber] = useState({
    number1: false,
    number2: false,
    number3: false,
    number4: false,
    number5: false,
  });

  const handleSubmit = () => {
    if (!showCard1) return;
    setShowCard2(true);

  };


  return (
    <div>
      <div className="card-header">
        <img src={star} alt="star_img.jpg" />
      </div>

      <div className="card-h2">
        <h2>
          How did we do?
        </h2>
      </div>

      <div className="card-p">
        <p>
          Please let us know how we did with your support request. All feedback is appreciated to help us
          improve our offering!
        </p>
      </div>

      <div className="card-number">
        <button
          className={ 
            activeNumber.number1
              ? "card-rating-num clicked"
              : "card-rating-num"
          }
          onClick={() => {
            setActiveNumber({
              number1: true,
              number2: false,
              number3: false,
              number4: false,
              number5: false,
            });
            setShowCard1(1)
          }}
        >
          1
        </button>

        <button
          className={
            activeNumber.number2
              ? "card-rating-num clicked"
              : "card-rating-num"
          }
          onClick={() => {
            setActiveNumber({
              number1: false,
              number2: true,
              number3: false,
              number4: false,
              number5: false,
            });
            setShowCard1(2)
          }}
        >
          2
        </button>

        <button
          className={
            activeNumber.number3
              ? "card-rating-num clicked"
              : "card-rating-num"
          }
          onClick={() => {
            setActiveNumber({
              number1: false,
              number2: false,
              number3: true,
              number4: false,
              number5: false,
            });
            setShowCard1(3)
          }}
        >
          3
        </button>

        <button
          className={
            activeNumber.number4
              ? "card-rating-num clicked"
              : "card-rating-num"
          }
          onClick={() => {
            setActiveNumber({
              number1: false,
              number2: false,
              number3: false,
              number4: true,
              number5: false,
            });
            setShowCard1(4)
          }}
        >
          4
        </button>

        <button
          className={
            activeNumber.number5
              ? "card-rating-num clicked"
              : "card-rating-num"
          }
          onClick={() => {
            setActiveNumber({
              number1: false,
              number2: false,
              number3: false,
              number4: false,
              number5: true,
            });
            setShowCard1(5)
          }}
        >
          5
        </button>
      </div>

      <div className="card-btn">
        <button type="submit" id='submit-btn' onClick={handleSubmit}>
          SUBMIT
        </button>
      </div>
    </div>
  )
}

export default Card