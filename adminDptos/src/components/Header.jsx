import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importa Link para la navegación

const Header = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  return (
    <header className="bg-blue-500 p-4">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-semibold">Mi Sitio Web</h1>

        {/* Menú para pantallas grandes */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-white">Inicio</Link>
          <Link to="/ingresos" className="text-white">Ingresos</Link>
          <Link to="/egresos" className="text-white">Egresos</Link>
        </nav>

        <button className="md:hidden text-white" onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Menú desplegable para pantallas pequeñas */}
      {menuAbierto && (
        <div className="md:hidden bg-blue-500 p-4">
          <Link to="/" className="block text-white py-2">Inicio</Link>
          <Link to="/ingresos" className="block text-white py-2">Ingresos</Link>
          <Link to="/egresos" className="block text-white py-2">Egresos</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
