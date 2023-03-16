import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Linkshortener from './Components/Linkshortener/Linkshortener';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router';

const App = (props: any) => {
  return (
    <div className="App">
      <Routes>
        <Route path='/linkshortener' element={<Linkshortener />} />
      </Routes>
    </div>
  );
}

export default App;
