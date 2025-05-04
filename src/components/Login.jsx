import React from 'react';

function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
        <div className="text-center mb-4">
          <img src="/logotipo-ligate.png" alt="Logo Liga-te" className="mx-auto h-24 mb-4" />
          <h2 className="text-xl font-semibold text-gray-800 mt-2">Aceder à plataforma</h2>
        </div>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Utilizador</label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              placeholder="ex: 1234"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">Palavra-passe</label>
            <input
              type="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;

