// src/components/ProtectedRoute.jsx

import React from "react";
import { Navigate } from "react-router-dom";
import { getUserRole } from "../utils/auth";

export default function ProtectedRoute({ children, allowedRole }) {
  const role = getUserRole();
  if (role !== allowedRole) return <Navigate to="/" replace />;
  return children;
}

