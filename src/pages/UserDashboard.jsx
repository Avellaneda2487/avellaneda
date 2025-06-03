// src/pages/UserDashboard.jsx

import React from "react";
import { logout } from "../utils/auth";
import { useNavigate } from "react-router-dom";

export default function UserDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Vista de Usuario</h1>
      <p>Acceso limitado para ver limpieza y pagos.</p>
      <button
        onClick={handleLogout}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
      >
        Cerrar sesión
      </button>
    </div>
  );
}

