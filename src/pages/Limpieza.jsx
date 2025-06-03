import React, { useState, useEffect } from 'react';

export default function Limpieza() {
  const [tareas, setTareas] = useState(() => {
    const guardadas = localStorage.getItem('tareas');
    return guardadas ? JSON.parse(guardadas) : [];
  });
  const [nuevaTarea, setNuevaTarea] = useState('');
  const [sugerencias, setSugerencias] = useState(() => {
    return localStorage.getItem('sugerencias') || '';
  });
  const [ranking, setRanking] = useState(() => {
    return parseInt(localStorage.getItem('ranking') || '0');
  });

  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }, [tareas]);

  useEffect(() => {
    localStorage.setItem('sugerencias', sugerencias);
  }, [sugerencias]);

  useEffect(() => {
    localStorage.setItem('ranking', ranking.toString());
  }, [ranking]);

  const agregarTarea = () => {
    if (nuevaTarea.trim() !== '') {
      setTareas([...tareas, { texto: nuevaTarea, realizada: false }]);
      setNuevaTarea('');
    }
  };

  const toggleTarea = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas[index].realizada = !nuevasTareas[index].realizada;
    setTareas(nuevasTareas);
  };

  return (
    <div className="p-4 space-y-6">
      <h2 className="text-2xl font-bold mb-4">Módulo de Limpieza</h2>

      <div>
        <h3 className="text-lg font-semibold mb-2">Agenda de tareas</h3>
        <div className="flex gap-2 mb-2">
          <input
            type="text"
            value={nuevaTarea}
            onChange={(e) => setNuevaTarea(e.target.value)}
            placeholder="Agregar nueva tarea"
            className="border px-2 py-1 rounded w-full"
          />
          <button
            onClick={agregarTarea}
            className="bg-blue-500 text-white px-3 py-1 rounded"
          >
            Agregar
          </button>
        </div>
        <ul className="space-y-1">
          {tareas.map((tarea, index) => (
            <li
              key={index}
              onClick={() => toggleTarea(index)}
              className={`cursor-pointer ${
                tarea.realizada ? 'line-through text-gray-400' : ''
              }`}
            >
              {tarea.texto}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Ranking de satisfacción</h3>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              onClick={() => setRanking(star)}
              className={`cursor-pointer text-2xl ${
                ranking >= star ? 'text-yellow-400' : 'text-gray-300'
              }`}
            >
              ★
            </span>
          ))}
        </div>
        <p className="text-sm text-gray-600 mt-1">
          Puntaje: {ranking} estrella{ranking !== 1 ? 's' : ''}
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Sugerencias</h3>
        <textarea
          value={sugerencias}
          onChange={(e) => setSugerencias(e.target.value)}
          placeholder="Escribí aquí tus sugerencias..."
          className="w-full border px-3 py-2 rounded"
          rows={4}
        />
      </div>
    </div>
  );
}

