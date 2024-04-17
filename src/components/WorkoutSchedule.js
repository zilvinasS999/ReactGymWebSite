import React from 'react';

function WorkoutSchedule() {
  return (
    <>
      <div class='dropdown-center'>
        <button
          class='btn btn-secondary dropdown-toggle'
          type='button'
          data-bs-toggle='dropdown'
          aria-expanded='false'
        >
          Centered dropdown
        </button>
        <ul class='dropdown-menu'>
          <li>
            <a class='dropdown-item' href='#'>
              Vilnius 1
            </a>
          </li>
          <li>
            <a class='dropdown-item' href='#'>
              Vilnius 2
            </a>
          </li>
          <li>
            <a class='dropdown-item' href='#'>
              Kaunas
            </a>
          </li>
          <li>
            <a class='dropdown-item' href='#'>
              Klaipėda
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default WorkoutSchedule;
