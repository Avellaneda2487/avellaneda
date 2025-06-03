// src/routes/Pagos.jsx
import React from 'react'

export default function Pagos() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Gestión de Pagos</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>📲 Generación de QR para pagos</li>
        <li>📤 Envío automático por WhatsApp</li>
        <li>📊 Visualización del estado de cuenta</li>
        <li>💬 Historial de pagos y avisos</li>
      </ul>
    </div>
  )
}

