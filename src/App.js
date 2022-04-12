import React from "react";
import './App.css';
import { Routes, Route } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './component/AppNavbar/AppNavbar';
import Footer from './component/Footer/Footer';
import Home from './component/Home/Home';
import SecondCard from './component/SecondCard/SecondCard';
function App() {
  return (
    <React.Fragment>
    <AppNavbar />
    
    <Routes>
      <Route path = '/' element = {<Home />} />
      <Route path = 'secondCard' element = {<SecondCard />} />
    </Routes>

    <Footer />
  </React.Fragment>
  );
}

export default App;
