import './App.css';
// import React, { useState } from 'react';
// import axios from 'axios';
// import PersonForm from './components/PersonForm';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from '.src/views/Main';
import Detail from './components/Detail';
import Update from './components/Update';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Main/>} path="/people/" />
          <Route element = {<Detail/>} path="/people/:id" />
          <Route element = {<Update/>} path='/people/edit/:id'/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
