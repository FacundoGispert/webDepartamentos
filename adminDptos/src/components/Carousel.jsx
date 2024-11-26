import React from 'react';
import dept1 from '../assets/IMG_6353.jpg';
import dept2 from '../assets/IMG_6357.jpg';
import dept3 from '../assets/IMG_6356.jpg';
import dept4 from '../assets/IMG_6353.jpg';
import dept5 from '../assets/IMG_2969.jpg';
import dept6 from '../assets/IMG_2968.jpg';
import dept7 from '../assets/IMG_2967.jpg';
import dept8 from '../assets/IMG_2966.jpg';
import dept9 from '../assets/Dpto 2-12.jpg';
import dept10 from '../assets/Dpto 2-10.jpg';
import dept11 from '../assets/Dpto 2-11.jpg';
import dept12 from '../assets/Dpto 2.jpg';
import dept13 from '../assets/IMG_0175.jpg';
import dept14 from '../assets/IMG_0172.jpg';
import dept15 from '../assets/IMG_0178.jpg';
import dept16 from '../assets/IMG_0171.jpg';
import Slider from 'react-slick';


const Carousel = ({ departamento }) => {
  const fotosPorDepartamento = {
    dept1: [dept1, dept2, dept3, dept4],
    dept2: [dept5, dept6, dept7, dept8],
    dept3: [dept9, dept10, dept11, dept12],
    dept4: [dept13, dept14, dept15, dept16]
  };

  // Configuración del slider
  const settings = {
    dots: false, // Muestra puntos de navegación
    arrows: true,
    infinite: false, // Ciclo infinito de imágenes
    speed: 500, // Velocidad de la transición
    slidesToShow: 3, // Número de imágenes visibles al mismo tiempo
    slidesToScroll: 1, // Número de imágenes a mover al desplazar
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="w-full">
      <Slider {...settings}>
        {fotosPorDepartamento[departamento].map((foto, index) => (
          <div key={index} className="px-2">
            <img
              src={foto}
              alt={`Departamento ${departamento} - Imagen ${index + 1}`}
              className="w-full h-64 object-cover rounded-md shadow-md"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
