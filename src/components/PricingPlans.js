import React from 'react';
import { Link } from 'react-router-dom';

function PricingPlans() {
  return (
    <section className='pricing-section'>
      <div className='pricing__head'>
        <h2>Pricing Plans</h2>
      </div>
      <div className='card__container'>
        <div className='pricing__card'>
          <div className='card__header'>
            <h3>"Classic"</h3>
            <p>12 month term</p>
          </div>
          <div className='card__content'>
            <div className='card__features'>
              <p className='card__feature'>24/7 Unlimited access</p>
              <p className='card__feature'>Access to all gyms</p>
              <p className='card__feature'>Free WIFI</p>
              <p className='card__feature'>Holidays up to 30 days</p>
              <p className='card__feature'>Training Classes</p>
              <p className='card__feature'>&nbsp;</p>
            </div>
            <div className='card__devider'></div>
            <div className='card__membership__sec'>
              <h4 className='price'>24.99 &euro;/month </h4>
              <button type='button' className='btn btn-primary buy-btn'>
                BUY
              </button>
            </div>
          </div>
        </div>
        <div className='pricing__card'>
          <div className='card__header'>
            <h3>"Flexible"</h3>
            <p>No commitment</p>
          </div>
          <div className='card__content'>
            <div className='card__features'>
              <p className='card__feature'>24/7 Unlimited access</p>
              <p className='card__feature'>Access to all gyms</p>
              <p className='card__feature'>Free WIFI</p>

              <p className='card__feature'>&nbsp;</p>
              <p className='card__feature'>&nbsp;</p>
              <p className='card__feature'>&nbsp;</p>
            </div>
            <div className='card__devider'></div>
            <div className='card__membership__sec'>
              <h4 className='price'>35.99 &euro;/month </h4>
              <button type='button' className='btn btn-primary buy-btn'>
                BUY
              </button>
            </div>
          </div>
        </div>

        <div className='pricing__card'>
          <div className='card__header'>
            <h3>"Premium"</h3>
            <p>12 month term</p>
          </div>
          <div className='card__content'>
            <div className='card__features'>
              <p className='card__feature'>24/7 Unlimited access</p>
              <p className='card__feature'>Access to all gyms</p>
              <p className='card__feature'>Free WIFI</p>
              <p className='card__feature'>Holidays up to 30 days</p>
              <p className='card__feature'>Training Classes</p>
              <p className='card__feature'>Sauna</p>
            </div>
            <div className='card__devider'></div>
            <div className='card__membership__sec'>
              <h4 className='price'>29.99 &euro;/month </h4>
              <button type='button' className='btn btn-primary buy-btn'>
                BUY
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricingPlans;
