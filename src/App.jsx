import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
const LandingPage=() =>(
  <>
  <Navbar/>
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