const Footer = () => {
    return (
      <footer className="bg-blue-500 text-white p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Columna 1: Información de Contacto */}
          <div>
            <h3 className="font-bold text-lg mb-2">Contacto</h3>
            <p>Teléfono: +54 9 123 456 7890 (WhatsApp)</p>
            <p>Email: info@alojamientos.com</p>
            <p>Horario de atención: Lunes a Viernes de 9:00 a 18:00</p>
          </div>
  
          {/* Columna 2: Redes Sociales */}
          <div>
            <h3 className="font-bold text-lg mb-2">Síguenos</h3>
            <a href="https://www.facebook.com/tuempresa" target="_blank" className="block mb-2 hover:text-yellow-300">Facebook</a>
            <a href="https://www.instagram.com/tuempresa" target="_blank" className="block mb-2 hover:text-yellow-300">Instagram</a>
          </div>
  
          {/* Columna 3: Políticas y Enlaces */}
          <div>
            <h3 className="font-bold text-lg mb-2">Enlaces</h3>
            <p><a href="/privacidad" className="block mb-2 hover:text-yellow-300">Política de Privacidad</a></p>
            <p><a href="/terminos" className="block mb-2 hover:text-yellow-300">Términos y Condiciones</a></p>
            <p><a href="/cancelacion" className="block mb-2 hover:text-yellow-300">Política de Cancelación</a></p>
          </div>
        </div>
  
  
        {/* Derechos de Autor */}
        <div className="mt-6 text-center">
          <p>&copy; 2024 TuEmpresa. Todos los derechos reservados.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  