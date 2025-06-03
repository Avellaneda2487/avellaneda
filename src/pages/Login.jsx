// src/pages/Login.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../utils/auth";

export default function Login() {
  const [role, setRole] = useState("admin");
  const navigate = useNavigate();

  const handleLogin = () => {
    login(role);
    navigate(role === "admin" ? "/admin" : "/usuario");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Ingresar</h2>
      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="p-2 border rounded mb-4"
      >
        <option value="admin">Administrador</option>
        <option value="usuario">Usuario</option>
      </select>
      <button
        onClick={handleLogin}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Entrar
      </button>
    </div>
  );
}

