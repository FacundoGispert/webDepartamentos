// src/components/DescripcionDepartamento.js
import React from 'react';
import { formatearDepartamento } from '../utils/formatter';

const DescripcionDepartamento = ({ departamento }) => {
  return (
    <div className="mt-2 bg-gray-100 p-4 ">
      <h3 className="text-2xl font-semibold text-gray-800">{ formatearDepartamento(departamento) }</h3>
      <p className="mt-2 text-gray-600">
        Este acogedor departamento de dos habitaciones es perfecto para quienes buscan comodidad y estilo. Ubicado en el corazón de la ciudad, tiene acceso fácil a restaurantes, tiendas y transporte público. Con una decoración moderna y detalles de lujo, el departamento está completamente amueblado y equipado para que disfrutes de tu estadía.
      </p>
      <p className="mt-2 text-gray-600">
        <strong>Características:</strong> 2 habitaciones, 1 baño, cocina completamente equipada, Wi-Fi gratuito, aire acondicionado, y un amplio balcón con vista panorámica. 
      </p>
      <p className="mt-2 text-gray-600">
        ¡Ideal para estancias de corta o larga duración! Haz tu reserva hoy y vive la experiencia única que ofrece este hermoso lugar.
      </p>
    </div>
  );
};

export default DescripcionDepartamento;
