import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="max-w-3xl mx-auto text-center mt-10">
      <img src="/logo-ligate.png" alt="Logo Liga-te ao Coração" className="mx-auto h-32 mb-6" />
      <h1 className="text-3xl font-bold text-green-700">Liga-te ao Coração</h1>
      <p className="mt-4 text-gray-700">
        Bem-vindo à plataforma de acompanhamento da pressão arterial nas farmácias.
      </p>
      <p className="mt-2 text-gray-700">
        Esta aplicação permite registar medições de pressão arterial, gerar relatórios para o médico, gerir utentes e visualizar estatísticas em tempo real.
      </p>
      <p className="mt-2 text-sm italic text-gray-500">
        Desenvolvido em parceria com a KRKA e a equipa de farmacêuticos do programa.
      </p>

      <div className="mt-6">
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
