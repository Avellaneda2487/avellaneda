// src/utils/auth.js

export function login(role) {
  localStorage.setItem("userRole", role);
}

export function logout() {
  localStorage.removeItem("userRole");
}

export function getUserRole() {
  return localStorage.getItem("userRole");
}

