import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignaturesPage from './Pages/SignaturesPage';
import './App.css';

function App() {

  return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/Signatures" element={<SignaturesPage/>} />
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;