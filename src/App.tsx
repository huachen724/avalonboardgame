import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootRoute from './routes/Root';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<RootRoute/>}/>
        <Route/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
