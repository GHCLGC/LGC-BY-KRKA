import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Navbar() {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  const location = useLocation();
  const navigate = useNavigate();

  // Esconde o Navbar na página de login
  if (location.pathname === '/login') return null;

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/');
    window.location.reload(); // Garante que o estado e os menus se atualizam
  };

  return (
    <nav className="p-4 flex items-center justify-between bg-white shadow">
      <Link to="/">
        {/* Logotipo opcional aqui */}
      </Link>
      <ul className="flex gap-4 text-green-800 font-semibold items-center">
        <li><Link to="/">Início</Link></li>
        {!isAuthenticated && <li><Link to="/login">Login</Link></li>}
        {isAuthenticated && (
          <>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/profile">Perfil</Link></li>
            <li>
              <button
                onClick={handleLogout}
                className="text-red-600 hover:underline"
              >
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
