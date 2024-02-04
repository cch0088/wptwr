import React from "react";
import './App.css';
import { WP_ROOT } from "./config";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Main from "./components/Main";
import NoPage from "./components/NoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`${WP_ROOT}/`} element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
