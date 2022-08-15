import './App.css';
// import React, { useState } from 'react';
// import axios from 'axios';
// import PersonForm from './components/PersonForm';
import {BrowserRouter, Routes, Router} from 'react-router-dom';
import Main from '../views/Main';
import Detail from './components/Detail';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Main/>} path="/people/" />
          <Route element = {<Detail/>} path="/people/:id" />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
