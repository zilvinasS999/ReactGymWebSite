import React from 'react';
import NavBar from '../components/NavBar';
import WorkoutSchedule from '../components/WorkoutSchedule';
import Footer from '../components/Footer';
import '../SchedulePage.css';

function SchedulePage() {
  return (
    <>
      <NavBar />
      <WorkoutSchedule />
      <Footer />
    </>
  );
}

export default SchedulePage;
