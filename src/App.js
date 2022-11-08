import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignaturesPage from './Pages/SignaturesPage';
import './App.css';
import NavBar from './Components/Navbar';
import HomePage from './Pages/HomePage';


function App() {

  const [currentTheme, setCurrentTheme] = useState('');

  return (
      <div className={`App ${currentTheme}-main`}>
        <BrowserRouter>
          <NavBar currentTheme={currentTheme}/>
          <Routes>
            <Route path="/" element={<HomePage currentTheme={currentTheme} setCurrentTheme={setCurrentTheme}/>}/>
            <Route path="/Signatures" element={<SignaturesPage currentTheme={currentTheme} setCurrentTheme={setCurrentTheme}/>} />
          </Routes>
        </BrowserRouter>
      </div>

  );
}

export default App;