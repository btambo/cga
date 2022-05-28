import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage'
import SignaturesPage from './Pages/SignaturesPage';
import './App.css';
import NavBar from './Components/Navbar';

function App() {

  return (
      <div className="App">
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/Signatures" element={<SignaturesPage/>} />
          </Routes>
        </BrowserRouter>
      </div>

  );
}

export default App;