import React from 'react';
import './App.css';
import Navbar from './components/Navbar/navbar';
// import Box from  './components/Box/box'
import Footer from './components/Footer/footer';
import LayoutComponent from './components/LayoutComponent/LayoutComponent';


const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="Content">
        < LayoutComponent/>
      </div>
      <Footer />
    </div>
  );
};

export default App;
