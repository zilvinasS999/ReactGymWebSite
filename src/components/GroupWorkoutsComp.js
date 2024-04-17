import React from 'react';
import PilatesPic from '../assets/imgs/pilates.webp';
import YogaPic from '../assets/imgs/yoga.webp';
import Trx from '../assets/imgs/Trx.jpeg';
import Streching from '../assets/imgs/stretching.jpeg';
import Crossfit from '../assets/imgs/crossfit.webp';
import Boxing from '../assets/imgs/boxing 2.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire, faClock } from '@fortawesome/free-solid-svg-icons';

function GroupWorkoutsComp() {
  return (
    <div className='group-page'>
      <section>
        <div className='workout__type'>
          <img src={PilatesPic} className='workout__img' />
          <div className='workout__desc'>
            <h2>Pilates</h2>
            <p>
              Pilates focuses on core strength, flexibility, and overall body
              conditioning. Through a series of controlled movements and mat
              exercises, this class is perfect for sculpting a leaner, stronger
              physique while improving posture and balance.
            </p>
            <div className='workout__info'>
              <div className='cals__info'>
                <h5 className='calories-head'>Calories</h5>
                <div className='cals'>
                  <FontAwesomeIcon icon={faFire} className='cal-fire' />
                  <p className='calories-burned'>350</p>
                </div>
              </div>
              <div className='duration'>
                <div className='duration__info'>
                  <h5 className='duration__head'>Duration</h5>
                  <div className='duration'>
                    <FontAwesomeIcon icon={faClock} className='cal-fire' />
                    <p className='calories-burned'>60 min.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='workout__type even'>
          <img src={YogaPic} className='workout__img' />
          <div className='workout__desc'>
            <h2>Yoga</h2>
            <p>
              Dive into the world of Yoga, where breath and movement unite to
              foster flexibility, strength, and peace of mind. This class offers
              a blend of postures to enhance your physical health and bring
              calmness to your day.
            </p>
            {/* <h5 className='calories-head'>Calories</h5>
            <div className='cals'>
              <FontAwesomeIcon icon={faFire} className='cal-fire' />
              <p className='calories-burned'>250</p>
            </div> */}
            <div className='workout__info'>
              <div className='cals__info'>
                <h5 className='calories-head'>Calories</h5>
                <div className='cals'>
                  <FontAwesomeIcon icon={faFire} className='cal-fire' />
                  <p className='calories-burned'>350</p>
                </div>
              </div>
              <div className='duration'>
                <div className='duration__info'>
                  <h5 className='duration__head'>Duration</h5>
                  <div className='duration'>
                    <FontAwesomeIcon icon={faClock} className='cal-fire' />
                    <p className='calories-burned'>90 min.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='workout__type'>
          <img src={Trx} className='workout__img' />
          <div className='workout__desc'>
            <h2>TRX</h2>
            <p>
              Unlock the potential of bodyweight exercises with TRX suspension
              training. This innovative workout challenges every muscle with
              gravity-based resistance to sculpt, tone, and elevate your fitness
              level.
            </p>
            <h5 className='calories-head'>Calories</h5>
            <div className='cals'>
              <FontAwesomeIcon icon={faFire} className='cal-fire' />

              <p className='calories-burned'>400</p>
            </div>
            <div className='duration'>
              <div className='duration__info'>
                <h5 className='duration__head'>Duration</h5>
                <div className='duration'>
                  <FontAwesomeIcon icon={faClock} className='cal-fire' />
                  <p className='calories-burned'>60 min.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='workout__type even'>
          <img src={Streching} className='workout__img' />
          <div className='workout__desc'>
            <h2>Stretch and Balance</h2>
            <p>
              A class dedicated to improving your flexibility and balance
              through a series of stretching exercises. It's the perfect way to
              enhance mobility, reduce the risk of injury, and promote a sense
              of physical and mental well-being.
            </p>
            <h5 className='calories-head'>Calories</h5>
            <div className='cals'>
              <FontAwesomeIcon icon={faFire} className='cal-fire' />
              <p className='calories-burned'>200</p>
            </div>
            <div className='duration'>
              <div className='duration__info'>
                <h5 className='duration__head'>Duration</h5>
                <div className='duration'>
                  <FontAwesomeIcon icon={faClock} className='cal-fire' />
                  <p className='calories-burned'>60 min.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='workout__type'>
          <img src={Crossfit} className='workout__img' />
          <div className='workout__desc'>
            <h2>CrossFit</h2>
            <p>
              CrossFit combines strength, conditioning, and high-intensity
              interval training (HIIT) to boost your fitness in every domain.
              Prepare for a variety of functional movements, performed at high
              intensities, designed to make you fitter, faster, and stronger.
            </p>
            <h5 className='calories-head'>Calories</h5>
            <div className='cals'>
              <FontAwesomeIcon icon={faFire} className='cal-fire' />
              <p className='calories-burned'>600</p>
            </div>
            <div className='duration'>
              <div className='duration__info'>
                <h5 className='duration__head'>Duration</h5>
                <div className='duration'>
                  <FontAwesomeIcon icon={faClock} className='cal-fire' />
                  <p className='calories-burned'>60 min.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='workout__type even'>
          <img src={Boxing} className='workout__img special' />
          <div className='workout__desc'>
            <h2>Boxing</h2>
            <p>
              Discover the power and discipline of boxing in our class designed
              for all skill levels. You'll learn the fundamentals of boxing,
              including proper stance, punch combinations, and defensive
              maneuvers. Our expert trainers will help you develop speed,
              agility, and strength, all while emphasizing the importance of
              footwork and strategy. Each session will push you to your limits
              and improve your cardiovascular health, ensuring a workout that's
              as mentally engaging as it is physically demanding.
            </p>
            <h5 className='calories-head'>Calories</h5>
            <div className='cals'>
              <FontAwesomeIcon icon={faFire} className='cal-fire' />
              <p className='calories-burned'>900</p>
            </div>
            <div className='duration'>
              <div className='duration__info'>
                <h5 className='duration__head'>Duration</h5>
                <div className='duration'>
                  <FontAwesomeIcon icon={faClock} className='cal-fire' />
                  <p className='calories-burned'>90 min.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default GroupWorkoutsComp;
