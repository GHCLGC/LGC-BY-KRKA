import React from 'react';

export default function Profile() {
  const nomeFarmacia = "Farmácia Central";
  const nomeFarmaceutico = "Dr. João Silva";
  const cedula = "12345";
  const nomeDoente = "Maria S.";
  const medicacao = "Ramipril 5mg";
  const observacoes = "Recomenda-se avaliação da adesão terapêutica.";

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-6 bg-white shadow-md rounded-xl">
      <h2 className="text-2xl font-bold text-green-700">Perfil do Doente</h2>

      <div className="space-y-1 text-sm text-gray-700">
        <p><strong>Farmácia:</strong> {nomeFarmacia}</p>
        <p><strong>Farmacêutico responsável:</strong> {nomeFarmaceutico}</p>
        <p><strong>Cédula Profissional:</strong> {cedula}</p>
        <p><strong>Nome do Doente:</strong> {nomeDoente}</p>
      </div>

      <div className="space-y-1 text-sm text-gray-700">
        <h3 className="font-semibold mt-4">Medicação Habitual</h3>
        <p className="italic">{medicacao}</p>
      </div>

      {observacoes && (
        <div className="space-y-1 text-sm text-gray-700">
          <h3 className="font-semibold mt-4">Observações do Farmacêutico</h3>
          <p className="italic">{observacoes}</p>
        </div>
      )}
    </div>
  );
}
