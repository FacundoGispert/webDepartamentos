import React from 'react';
import { formatearFecha, formatearDepartamento } from '../utils/formatter';

const Subheader = ({ onDepartamentoChange, departamento ,fechaDesde, fechaHasta, onFechaDesdeChange, onFechaHastaChange }) => {

  const handleWhatsAppRedirect = () => {
    const mensaje = `Hola, quería consultar la disponibilidad del *${formatearDepartamento(departamento)}*.

Para las fechas:
- *Desde*: ${formatearFecha(fechaDesde)}
- *Hasta*: ${formatearFecha(fechaHasta)}

Gracias.`;
    const numeroTelefono = '2614855050'; // Reemplazar por el número de WhatsApp del alojamiento
    const urlWhatsApp = `https://wa.me/${numeroTelefono}?text=${encodeURIComponent(mensaje)}`;
    window.open(urlWhatsApp, '_blank');
  };


  return (
    <div className="bg-white p-4">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Filtro de Departamento */}
        <div className="mb-4 md:mb-0">
          <label htmlFor="departamento" className="block text-sm font-semibold text-gray-700">Departamento</label>
          <select 
            id="departamento" 
            className="mt-1 p-2 border rounded-md"
            onChange={(e) => onDepartamentoChange(e.target.value)}
          >
            <option value="dept1">Departamento 1</option>
            <option value="dept2">Departamento 2</option>
            <option value="dept3">Departamento 3</option>
            <option value="dept4">Departamento 4</option>
          </select>
        </div>

        {/* Filtro de Fechas */}
        <div className="flex flex-col md:flex-row gap-4 mb-4 md:mb-0">
          <div>
            <label htmlFor="fechaDesde" className="block text-sm font-semibold text-gray-700">Desde</label>
            <input
              type="date"
              id="fechaDesde"
              value={fechaDesde}
              onChange={(e) => onFechaDesdeChange(e.target.value)}
              className="mt-1 p-2 border rounded-md"
            />
          </div>

          <div>
            <label htmlFor="fechaHasta" className="block text-sm font-semibold text-gray-700">Hasta</label>
            <input
              type="date"
              id="fechaHasta"
              value={fechaHasta}
              onChange={(e) => onFechaHastaChange(e.target.value)}
              className="mt-1 p-2 border rounded-md"
            />
          </div>
        </div>

        {/* Botón de consultar disponibilidad */}
        <button
          type='button'
          className="bg-blue-500 text-white px-6 py-2 mt-4 md:mt-0 rounded-md"
          onClick={handleWhatsAppRedirect}
        >
          Consultar Disponibilidad
        </button>
      </div>
    </div>
  );
};

export default Subheader;
