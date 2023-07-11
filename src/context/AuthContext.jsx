import React, {
  useState, useContext, createContext, useEffect, useMemo,
} from 'react';
import PropTypes from 'prop-types';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUsername = localStorage.getItem('username');
    return savedUsername ? JSON.parse(savedUsername) : '';
  });

  useEffect(() => {
    const temp = JSON.stringify(user);
    localStorage.setItem('username', temp);
  }, [user]);

  const login = (username) => setUser(username);
  const logout = () => setUser('');

  const contextValue = useMemo(() => ({
    user,
    login,
    logout,
  }), [user, login, logout]);

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useAuthContext = () => useContext(AuthContext);
