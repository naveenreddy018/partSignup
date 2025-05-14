import React, { createContext, useState, useContext, useEffect } from 'react';

// Create context
const AuthContext = createContext();

// Create a hook to use the auth context
export function useAuth() {
  return useContext(AuthContext);
}

function AuthContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // Check if there's a user in local storage when the app loads
  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setCurrentUser(JSON.parse(user));
    }
    setLoading(false);
  }, []);

  // Login function
  const login = (userData, rememberMe = false) => {
    // In a real app, you would validate credentials with an API
    setCurrentUser(userData);
    
    // If "remember me" is checked, store user in localStorage
    if (rememberMe) {
      localStorage.setItem('user', JSON.stringify(userData));
    }
    
    return userData;
  };

  // Register function
  const register = (userData) => {
    // In a real app, you would send this data to an API
    setCurrentUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
    return userData;
  };

  // Logout function
  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('user');
  };

  const value = {
    currentUser,
    login,
    register,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;