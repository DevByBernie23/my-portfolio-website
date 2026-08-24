import { Routes, Route } from 'react-router-dom';
import './App.css'
import React from 'react';
import { home } from './data/routes';
import Homepage from './components/Homepage/Homepage';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path={home} element={<Homepage/>}/>
      </Routes>
    </div>
  );
}

export default App;
