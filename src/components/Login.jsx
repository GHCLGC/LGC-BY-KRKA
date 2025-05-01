import React from 'react';

function Login() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Login</h2>
      <form className="space-y-4">
        <div>
          <label className="block mb-1">Email</label>
          <input type="email" className="border p-2 w-full" />
        </div>
        <div>
          <label className="block mb-1">Password</label>
          <input type="password" className="border p-2 w-full" />
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Entrar
        </button>
      </form>
    </div>
  );
}

export default Login;
