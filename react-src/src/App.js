import React from "react";
import './App.css';
import { WP_ROOT } from "./config";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Main from "./components/Main";
import Test from "./components/Test";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`${WP_ROOT}/`} element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="test" element={<Test />} />
          <Route path="*" element={<Main />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
