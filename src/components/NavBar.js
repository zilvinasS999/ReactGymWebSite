import React from 'react';
import logo from '../assets/imgs/GymLogo2.webp';
import { Link } from 'react-router-dom';


function NavBar() {
  return (
    <header>
      <div className='logo__container'>
        <a href=''>
          <img src={logo} alt='' className='logo' />
        </a>
      </div>
      <nav>
        <div className='navbar__left'>
          <ul>
            <Link className='nav-link' to='/memberships'>
              <li>Memberships</li>
            </Link>
            <Link className='nav-link' to='/group'>
              <li>Group Workouts</li>
            </Link>
            <li>Schedule</li>
            <li>About Us</li>
            <li>Trainers</li>
          </ul>
        </div>
        <div className='navbar__right'>
          <div className='btn-group dropdown-btn'>
            <button
              type='button'
              className='btn dropdown-toggle'
              data-bs-toggle='dropdown'
              aria-expanded='false'
            >
              GYMS
            </button>
            <ul className='dropdown-menu'>
              <li>
                <a className='dropdown-item' href='#'>
                  Vilnius 1
                </a>
              </li>
              <li>
                <a className='dropdown-item' href='#'>
                  Vilnius 2
                </a>
              </li>
              <li>
                <hr className='dropdown-divider' />
              </li>
              <li>
                <a className='dropdown-item' href='#'>
                  Kaunas
                </a>
              </li>
              <li>
                <hr className='dropdown-divider' />
              </li>
              <li>
                <a className='dropdown-item' href='#'>
                  Klaipėda
                </a>
              </li>
            </ul>
          </div>

          <button type='button' className='btn btn-primary login-btn'>
            LOG IN
          </button>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
