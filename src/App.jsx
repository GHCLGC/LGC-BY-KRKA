import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="p-6 max-w-3xl mx-auto space-y-4">
      <h1 className="text-3xl font-bold text-green-700">Liga-te ao Coração</h1>
      <p className="text-gray-700 text-lg">
        Bem-vindo à plataforma de acompanhamento da pressão arterial nas farmácias.
      </p>
    </div>
  );
}

export default App;
