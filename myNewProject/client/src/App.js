import './App.css';
import React, { useState } from 'react';
import axios from 'axios';
// import PersonForm from './components/PersonForm';
import {BrowserRouter, Routes, Router} from 'react-router-dom';
import Main from '../views/Main';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Main/>} path="/home" default/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
