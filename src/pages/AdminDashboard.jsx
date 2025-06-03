// src/pages/AdminDashboard.jsx

import React from "react";
import { logout } from "../utils/auth";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Panel de Administrador</h1>
      <p>Aquí verás todo el sistema de gestión completo.</p>
      <button
        onClick={handleLogout}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
      >
        Cerrar sesión
      </button>
    </div>
  );
}

