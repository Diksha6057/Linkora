import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
const LandingPage=() =>(
  <>
  <Navbar/>
  <Hero/>
  </>
);
const App = () => {
  return (
   <Routes>
    <Route path='/' element={<LandingPage/>}/>
   </Routes>
  );
};

export default App