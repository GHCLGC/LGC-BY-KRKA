import { createContext, useContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isAuthenticated') === 'true';
    setAuthenticated(isLoggedIn);
  }, []);

  const login = (username, password) => {
    // Aqui defines a validação real das credenciais
    if (username === '1234' && password === 'admin') {
      localStorage.setItem('isAuthenticated', 'true');
      setAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem('isAuthenticated');
    setAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ authenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook personalizado para reutilizar
export const useAuth = () => useContext(AuthContext);
