import React from 'react';
import NavBar from '../components/NavBar';
import UpperPagePic from '../components/UpperPagePic';
import GymFeatures from '../components/GymFeatures';
import PricingPlans from '../components/PricingPlans';
import Footer from '../components/Footer';

function IndexPage() {
  return (
    <div>
      <NavBar />
      <main>
        <UpperPagePic />
        <GymFeatures />
        <PricingPlans />
      </main>
      <Footer />
    </div>
  );
}

export default IndexPage;
