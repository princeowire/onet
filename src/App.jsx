// import { useState } from 'react'
import './index.css'
import { Nav } from './component/nav/nav';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './pages/home/home';
import { Footer } from './component/footer/footer';
import { Frontend } from './pages/forntend/frontend';
import { Uiux } from './pages/uiux/uiux';
import { Backend } from './pages/backend/backend';

function App() {
  return (
    <BrowserRouter>
    <Nav />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/frontend" element={<Frontend />}/>
      <Route path="/uiux" element={<Uiux />}/>
      <Route path="/backend" element={<Backend />}/>
    </Routes>
    <Footer />
    </BrowserRouter>
       
  );
}

export default App;