import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const dados = [
  { dia: "Dia 1", sistolica: 142, diastolica: 90 },
  { dia: "Dia 2", sistolica: 138, diastolica: 88 },
  { dia: "Dia 3", sistolica: 145, diastolica: 92 },
  { dia: "Dia 4", sistolica: 139, diastolica: 86 },
  { dia: "Dia 5", sistolica: 137, diastolica: 85 }
];

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold text-green-700">Dashboard de Medições</h2>

      <div className="bg-white shadow-md rounded-xl p-4">
        <h3 className="text-lg font-semibold mb-2">Gráfico de Evolução</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={dados} margin={{ top: 10, right: 30, left: 10, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="dia" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="sistolica" stroke="#82ca9d" name="Sistólica" />
            <Line type="monotone" dataKey="diastolica" stroke="#8884d8" name="Diastólica" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white shadow-md rounded-xl p-4">
        <h3 className="text-lg font-semibold mb-2">Tabela de Registos</h3>
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100">
            <tr>
              <th className="px-4 py-2">Dia</th>
              <th className="px-4 py-2">Sistólica</th>
              <th className="px-4 py-2">Diastólica</th>
            </tr>
          </thead>
          <tbody>
            {dados.map((dado, index) => (
              <tr key={index} className="border-t">
                <td className="px-4 py-2">{dado.dia}</td>
                <td className="px-4 py-2">{dado.sistolica}</td>
                <td className="px-4 py-2">{dado.diastolica}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
