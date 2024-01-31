import React from "react";
import Header from './components/Header';
import UserControl from './components/UserControl';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import './App.css';

function App() {
    return (
      <>
        <Header />
        <NavBar />
        <UserControl />
        <Footer />
      </>
    );
  }

export default App;
