import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './pages/Navbar.jsx';
import Main from './pages/main.jsx';
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Main />
      </BrowserRouter>
    </div>
  );
}
