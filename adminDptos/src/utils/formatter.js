export const formatearDepartamento = (value) => {
    switch (value) {
      case 'dept1':
        return 'Departamento 1';
      case 'dept2':
        return 'Departamento 2';
      case 'dept3':
        return 'Departamento 3';
      case 'dept4':
        return 'Departamento 4';
      default:
        return 'Departamento desconocido';
    }
  };

  export const formatearFecha = (fecha) => {
    const opciones = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return new Date(fecha).toLocaleDateString('es-ES', opciones);
  };