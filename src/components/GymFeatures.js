import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInfinity,
  faClock,
  faStopwatch,
  faDumbbell,
  faUtensils,
  faCar,
} from '@fortawesome/free-solid-svg-icons';

function GymFeatures() {
  return (
    <section className='gym__features__section'>
      <div class='gym-features'>
        <div className='gym-feature'>
          <FontAwesomeIcon icon={faInfinity} className='feature-logo' />
          <p>Unlimited Gym Access</p>
        </div>
        <div className='gym-feature'>
          <FontAwesomeIcon icon={faClock} className='feature-logo' />
          <p>Working 24/7</p>
        </div>
        <div className='gym-feature'>
          <FontAwesomeIcon icon={faStopwatch} className='feature-logo' />
          <p>Unlimited time in the gym</p>
        </div>
        <div className='gym-feature'>
          <FontAwesomeIcon icon={faDumbbell} className='feature-logo' />
          <p>Personal Training</p>
        </div>
        <div className='gym-feature'>
          <FontAwesomeIcon icon={faUtensils} className='feature-logo' />
          <p>Diet Plans</p>
        </div>
        <div className='gym-feature'>
          <FontAwesomeIcon icon={faCar} className='feature-logo' />
          <p>Free Parking</p>
        </div>
      </div>
    </section>
  );
}

export default GymFeatures;
