import React from "react";
import Header from './components/Header';
import UserControl from './components/UserControl';
import Footer from './components/Footer';
import './App.css';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <UserControl />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
