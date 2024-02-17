import React from "react";
import './App.css';
import * as nav from "./config";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Main from "./components/Main";
import NoPage from "./components/NoPage";
import { ApolloProvider } from "@apollo/client";
import { client } from "./lib/apolloClient";
import { AuthProvider } from "./hooks/useAuth";

function App() {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path={nav.WP_ROOT} element={<Layout />}>
              <Route index element={<Main />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ApolloProvider>
  );
}

export default App;
