import React from 'react';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow">
        <h1 className="text-2xl font-bold text-green-700 mb-4">Bem-vindo à sua área pessoal</h1>
        <p className="text-gray-700 mb-6">
          Aqui pode gerir as suas consultas, visualizar relatórios, e acompanhar os dados de pressão arterial.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-green-100 rounded-lg shadow">
            <h2 className="font-semibold text-green-800">Consultas</h2>
            <p className="text-sm text-gray-600">Visualizar e agendar.</p>
          </div>
          <div className="p-4 bg-green-100 rounded-lg shadow">
            <h2 className="font-semibold text-green-800">Relatórios</h2>
            <p className="text-sm text-gray-600">Ver resultados e enviar para o médico.</p>
          </div>
          <div className="p-4 bg-green-100 rounded-lg shadow">
            <h2 className="font-semibold text-green-800">Perfil</h2>
            <p className="text-sm text-gray-600">Editar os seus dados pessoais.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
