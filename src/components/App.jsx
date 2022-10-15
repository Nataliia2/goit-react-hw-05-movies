import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { NavBar } from './Navigation/Navigation';
import HomePage from './HomePage/HomePage';
import MoviesPage from './MoviesPage/MoviesPage';
import DetailsPage from './DetailsPage/DetailsPage';


export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavBar />}>
        <Route index element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<DetailsPage />}>

        </Route>
        </Route>       
      </Routes>
    </>
  );
};