import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="max-w-3xl mx-auto text-center mt-10 px-4">
      <img src="/logo-ligate.png" alt="Logo Liga-te ao Coração" className="mx-auto h-32 mb-6" />
      
      <h1 className="text-3xl font-bold text-green-700 mb-2">Liga-te ao Coração</h1>
      
      <p className="text-gray-700 mb-2">
        Bem-vindo à plataforma de acompanhamento da pressão arterial nas farmácias.
      </p>

      <p className="text-gray-700 mb-4">
        Esta aplicação permite registar medições de pressão arterial, gerar relatórios para o médico,
        gerir utentes e visualizar estatísticas em tempo real.
      </p>

      <p className="text-sm italic text-gray-500 mb-8">
        Desenvolvido em parceria com a KRKA e a equipa de farmacêuticos do programa.
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
