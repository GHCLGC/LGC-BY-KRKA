import React from 'react';

export default function Home() {
  return (
    <div className="p-6 max-w-3xl mx-auto space-y-4">
      <h1 className="text-3xl font-bold text-green-700">Liga-te ao Coração</h1>
      <p className="text-gray-700 text-lg">
        Bem-vindo à plataforma de acompanhamento da pressão arterial nas farmácias.
      </p>
      <p className="text-gray-600">
        Esta aplicação permite registar medições de pressão arterial, gerar relatórios para o médico, gerir utentes e visualizar estatísticas em tempo real.
      </p>
      <p className="text-sm text-gray-500 italic">
        Desenvolvido em parceria com a KRKA e a equipa de farmacêuticos do programa.
      </p>
    </div>
  );
}
