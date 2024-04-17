import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IndexPage from './pages/IndexPage';
import PricingPlanPage from './pages/PricingPlanPage';
import GroupWorkoutsPage from './pages/GroupWorkoutsPage';
import SchedulePage from './pages/SchedulePage';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<IndexPage />} />
          <Route path='/memberships' element={<PricingPlanPage />} />
          <Route path='/group' element={<GroupWorkoutsPage />} />
          <Route path='/schedule' element={<SchedulePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
