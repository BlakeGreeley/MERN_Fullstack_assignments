import './App.css';
import Main from "./views/Main";
import OneProduct from "./components/OneProduct";
import { BrowserRouter, Routes, Route } from "react";

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/product/:id" element={<OneProduct/>} />
        </Routes>
      </div>
    </BrowserRouter>    
  );
}

export default App;
