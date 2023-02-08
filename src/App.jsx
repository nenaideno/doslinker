import React from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Linkshorter from './Components/Linkshorter/Linkshorter';

const App = (props) => {
  return (
    <Routes>
      <Route path='/linkshorter' element={<Linkshorter />} />
    </Routes>

  )
}

export default App;
