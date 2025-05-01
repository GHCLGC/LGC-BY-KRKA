import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-green-100 shadow p-4 flex items-center justify-between">
      <Link to="/">
        <img src="/logo-ligate.png" alt="Logo Liga-te" className="h-10" />
      </Link>
      <ul className="flex gap-4 text-green-800 font-semibold">
        <li><Link to="/">Início</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/profile">Perfil</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
