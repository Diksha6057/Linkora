import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
const LandingPage=() =>(
  <>
  <Navbar/>
  <Hero/>
  <Footer/>
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