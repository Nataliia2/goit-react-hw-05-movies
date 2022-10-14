import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { NavBar } from './Navigation/Navigation';
import  HomePage  from './HomePage/HomePage';
export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavBar />}/>
          <Route index element={<HomePage />} />
          
        
      </Routes>
    </>
  );
};