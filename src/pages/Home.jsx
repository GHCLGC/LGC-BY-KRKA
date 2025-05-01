import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="max-w-3xl mx-auto text-center mt-10 px-4">
      {/* Logotipo central com maior dimensão */}
      <img
        src="/logo-ligate.png"
        alt="Logo Liga-te ao Coração"
        className="mx-auto h-40 mb-6"
      />

      {/* Título principal */}
      <h1 className="text-3xl font-bold text-green-700 mb-4">
        Liga-te ao Coração
      </h1>

      {/* Frase de boas-vindas */}
      <p className="text-gray-700 mb-6">
        Bem-vindo à plataforma de acompanhamento da pressão arterial nas farmácias.
      </p>

      {/* Frase substituída */}
      <p className="text-sm italic text-gray-500 mb-8">
        Esta é uma aplicação desenvolvida pela KRKA Farmacêutica.
      </p>

      {/* Botão de login centrado */}
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
