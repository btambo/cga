import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignaturesPage from './pages/SignaturesPage';
import './App.css';
import NavBar from './components/Navbar';
import HomePage from './pages/HomePage';


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