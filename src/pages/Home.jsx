import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="max-w-3xl mx-auto text-center mt-10">
      <img
        src="/logo-ligate.png"
        alt="Logo Liga-te ao Coração"
        className="mx-auto h-[20rem] mb-6"
      />

      <p className="text-gray-700 mb-2">
        Bem-vindo à plataforma de acompanhamento da pressão arterial nas farmácias.
      </p>

      <p className="text-sm italic text-gray-500 mb-6">
        Esta é uma aplicação desenvolvida pela KRKA Farmacêutica.
      </p>

      <div className="mt-4">
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
