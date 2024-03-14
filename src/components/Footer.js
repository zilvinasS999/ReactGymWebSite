import React from 'react';
import logo from '../assets/imgs/GymLogo2.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import instaLogo from '../assets/imgs/instagram-white-icon.webp';
import fbLogo from '../assets/imgs/white-facebook-icon-png-29.jpg';

function Footer() {
  return (
    <footer>
      <div className='contacts'>
        <img src={logo} alt='dumbell' className='footer__logo' />
        <div className='phone__number'>
          <FontAwesomeIcon icon={faPhone} className='phone__icon' />
          <p>+370612345</p>
        </div>
        <div className='footer__email'>
          <FontAwesomeIcon icon={faEnvelope} className='envelope__icon' />
          <p>gym@email.com</p>
        </div>
        <div className='footer__socials'>
          <img src={instaLogo} alt='' className='insta__logo' />
          <img src={fbLogo} alt='' className='fb__logo' />
        </div>
      </div>
      <div className='footer__nav'>
        <li>Memberships</li>
        <li>Group Workouts</li>
        <li>Schedule</li>
        <li>About Us</li>
        <li>Trainers</li>
        <li>FAQ</li>
        <li>Join Our Team</li>
      </div>
    </footer>
  );
}

export default Footer;
