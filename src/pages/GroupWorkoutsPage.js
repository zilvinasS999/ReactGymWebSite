import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import GroupWorkoutsComp from '../components/GroupWorkoutsComp';
import '../GroupPage.css';

function GroupWorkoutsPage() {
  return (
    <div className='group-page'>
      <NavBar />
      <GroupWorkoutsComp />

      <Footer />
    </div>
  );
}

export default GroupWorkoutsPage;
