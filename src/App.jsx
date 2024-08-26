import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import React Router components
import './App.css';
import Herosection from './sections/Herosection';
import PopularDestinations from './sections/PopularDestinations';
import HotelsAndRestaurants from './components/Hotels';
import SearchResults from './components/searchResult';
import ViewAll from './components/ViewAll';
import TripsAndAdvice from './components/TripsAndAdvice';
import Activities from './components/Activies';
import AboutUs from './components/aboutUs';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="main max-w-screen-2xl m-auto min-w-min">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Herosection />
                <PopularDestinations />
                <HotelsAndRestaurants />
                <TripsAndAdvice/>
                <Activities/>
                <AboutUs/>
                <Footer/>
              </>
            }
          />
          <Route path="/search-results" element={<SearchResults />} />
             <Route path="/view-all" element={<ViewAll />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;