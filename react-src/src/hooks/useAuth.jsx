import { useQuery } from "@apollo/client";
import React, { createContext, useContext } from "react";
import { GET_USER } from "../gql";

const AuthContext = createContext();

export function AuthProvider({ children }) {

  const { data, loading, error } = useQuery(GET_USER);
  const user = data?.viewer;
  const loggedIn = Boolean(user);

  const value = {
    loggedIn,
    user,
    loading,
    error,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

const useAuth = () => useContext(AuthContext);

export default useAuth;
