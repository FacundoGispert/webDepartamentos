import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './components/header';
import Subheader from './components/Subheader'; // Importa el Subheader
import Carousel from './components/Carousel'; // Importa el carrusel (Inicio)
import DescripcionDepartamento from './components/DescripcionDepartamento';
import Ingresos from './components/Ingresos'; // Importa la sección de Ingresos
import Egresos from './components/Egresos'; // Importa la sección de Egresos
import Footer from './components/Footer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const App = () => {
  const [departamentoSeleccionado, setDepartamentoSeleccionado] = React.useState('dept1');
  const [fechaDesde, setFechaDesde] = React.useState('');
  const [fechaHasta, setFechaHasta] = React.useState('');

  return (
    <Router>
      <div className="bg-white min-h-screen">
        <header>
          <Header />
        </header>
        <Routes>
          <Route
            path="/"
            element={
              <>
                {/* Subheader y Carousel dentro de la ruta de Inicio */}
                <Subheader onDepartamentoChange={setDepartamentoSeleccionado} departamento={departamentoSeleccionado} onFechaDesdeChange={setFechaDesde} fechaDesde={fechaDesde} onFechaHastaChange={setFechaHasta} fechaHasta={fechaHasta}/>
                <main className="container mx-auto my-6 bg-gray-100 py-1 px-8 rounded-md shadow-md">
                  <DescripcionDepartamento departamento={departamentoSeleccionado}/>
                  <section className="my-6">
                    <Carousel departamento={departamentoSeleccionado} />
                  </section>

                </main>

              </>
            }
          />
          <Route path="/ingresos" element={<Ingresos />} />
          <Route path="/egresos" element={<Egresos />} />
        </Routes>
        <footer>
        <div className="flex-grow"></div> {/* Este div garantiza que el footer siempre se quede en la parte inferior */}

        <Footer />  {/* Footer al final de la página */}
      </footer>
      </div>
    </Router>
  );
};

export default App;
