"use client";

import api from "@/server/api";
import { createContext, ReactNode, useEffect, useState } from "react";

interface User {
  id: string;
  username: string;
  email: string;
  role:string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  getUser: () => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({children}: {children: ReactNode}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const getUser = async () => {
    try {
      const res = await api.get("/auth/me", {
        withCredentials: true,
      });
       console.log("ME API:", res.data.user);
      
      setUser(res.data.user);
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    await api.post(
      "/auth/logout",
      {},
      {
        withCredentials: true,
      },
    );

    setUser(null);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        getUser,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
