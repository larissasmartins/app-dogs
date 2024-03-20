import React from 'react';
import './App.css';
import Home from './Components/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Login from './Components/Login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserStorage } from './UserContext';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login/*" element={<Login />}></Route>
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
};

export default App;
