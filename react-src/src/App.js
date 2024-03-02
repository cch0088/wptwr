import React, { useState } from "react";
import './App.css';
import * as nav from "./config";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Main from "./components/Main";
import NoPage from "./components/NoPage";
import PasswordReset from "./components/PasswordReset";
import ForumSite from "./components/forum/ForumSite";
import ForumTopicList from "./components/forum/ForumTopicList";
import { ApolloProvider } from "@apollo/client";
import { client } from "./lib/apolloClient";
import { AuthProvider } from "./hooks/useAuth";

function App() {
  const currentUrl = window.location.href;

  const [categoryId, setCategoryId] = useState(1);

  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path={nav.WP_ROOT} element={<Layout />}>
              <Route index element={<Main />} />
              <Route path="set-password" element={<PasswordReset currentUrl={currentUrl} />} />
              <Route path="forum" element={<ForumSite setCategoryId={setCategoryId} />} />
              <Route path="forum/threads" element={<ForumTopicList categoryId={categoryId} />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ApolloProvider>
  );
}

export default App;
