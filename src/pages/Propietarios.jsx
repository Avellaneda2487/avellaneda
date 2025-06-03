import React, { useState, useEffect } from 'react';

const unidades = [
  "01 PB A GALLARDO ANNABEL",
  "02 PB B YBARRA GUSTAVO EZEQUIEL",
  "03 PB C SR. PROPIETARIO",
  "04 PB D NAVA LAURA",
  "05 1°E KOLOSOV ANATOLI",
  "06 1°F FERNANDEZ MANUEL",
  "07 1°G PRADO GABRIELA",
  "08 1°H PORRETTI DANIEL",
  "09 2°I CONCILIO CELESTE 1",
  "10 2°J MARTY FERNANDO",
  "11 2°K RIOS RICARDO MARCELO",
  "12 2°L ELFAND JUAN PABLO",
  "13 3°M LUNA EVANGELINA",
  "14 3°N CADEP"
];

export default function Propietarios() {
  const [propietarios, setPropietarios] = useState([]);
  const [unidadSeleccionada, setUnidadSeleccionada] = useState('');
  const [nombre, setNombre] = useState('');
  const [contacto, setContacto] = useState('');

  useEffect(() => {
    const datosGuardados = localStorage.getItem('propietarios');
    if (datosGuardados) {
      setPropietarios(JSON.parse(datosGuardados));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('propietarios', JSON.stringify(propietarios));
  }, [propietarios]);

  const agregarPropietario = () => {
    if (unidadSeleccionada && nombre.trim() !== '') {
      const nuevo = {
        unidad: unidadSeleccionada,
        nombre,
        contacto
      };
      const actualizados = propietarios.filter(p => p.unidad !== unidadSeleccionada);
      setPropietarios([...actualizados, nuevo]);
      setUnidadSeleccionada('');
      setNombre('');
      setContacto('');
    }
  };

  return (
    <div className="p-4 space-y-6">
      <h2 className="text-2xl font-bold mb-4">Listado de Propietarios</h2>

      {/* Formulario */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
        <div>
          <label className="block text-sm font-medium">Unidad</label>
          <select
            value={unidadSeleccionada}
            onChange={(e) => setUnidadSeleccionada(e.target.value)}
            className="w-full border rounded px-2 py-1"
          >
            <option value="">Seleccionar unidad</option>
            {unidades.map((unidad) => (
              <option key={unidad} value={unidad}>{unidad}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium">Nombre</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="w-full border rounded px-2 py-1"
            placeholder="Nombre del propietario"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Contacto</label>
          <input
            type="text"
            value={contacto}
            onChange={(e) => setContacto(e.target.value)}
            className="w-full border rounded px-2 py-1"
            placeholder="Teléfono o email"
          />
        </div>
        <button
          onClick={agregarPropietario}
          className="bg-blue-500 text-white px-4 py-2 rounded col-span-1 md:col-span-3"
        >
          Agregar / Actualizar
        </button>
      </div>

      {/* Tabla */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2 text-left">Unidad</th>
              <th className="border px-4 py-2 text-left">Nombre</th>
              <th className="border px-4 py-2 text-left">Contacto</th>
            </tr>
          </thead>
          <tbody>
            {propietarios.map((p, idx) => (
              <tr key={idx}>
                <td className="border px-4 py-2">{p.unidad}</td>
                <td className="border px-4 py-2">{p.nombre}</td>
                <td className="border px-4 py-2">{p.contacto}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

