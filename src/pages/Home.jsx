import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="max-w-3xl mx-auto text-center mt-10 px-4">
      <img
        src="/logo-ligate.png"
        alt="Logo Liga-te ao Coração"
        className="mx-auto h-40 mb-6"
      />
      <h1 className="text-3xl font-bold text-green-700 mb-4">
        Liga-te ao Coração
      </h1>
      <p className="text-gray-700 mb-6">
        Bem-vindo à plataforma de acompanhamento da pressão arterial nas farmácias.
      </p>
      <p className="text-sm italic text-gray-500 mb-8">
        Esta é uma aplicação desenvolvida pela KRKA Farmacêutica.
      </p>
      <div className="flex justify-center">
        <Link
          to="/login"
          className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition"
        >
          Iniciar Sessão
        </Link>
      </div>
    </div>
  );
}

export default Home;
