import React, { useState } from 'react';

const RegistroUsuario = () => {
  const [usuario, setUsuario] = useState({
    nombre: '',
    apellido: '',
    email: '',
    contraseña: '',
    rol: 'cliente'
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUsuario((prevUsuario) => ({
      ...prevUsuario,
      [name]: value
    }));
  };

  const handleConfirmar = () => {
   
    console.log('Usuario registrado:', usuario);
    
    setUsuario({
      nombre: '',
      apellido: '',
      email: '',
      contraseña: '',
      rol: 'cliente'
    });
  };

  const handleCancelar = () => {
   
    setUsuario({
      nombre: '',
      apellido: '',
      email: '',
      contraseña: '',
      rol: 'cliente'
    });
  };

  return (
    <div className='formUsuario'>
      <h2>Registro de Usuario</h2>
      <form>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={usuario.nombre}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="apellido">Apellido:</label>
          <input
            type="text"
            id="apellido"
            name="apellido"
            value={usuario.apellido}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">E-Mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={usuario.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="contraseña">Contraseña:</label>
          <input
            type="password"
            id="contraseña"
            name="contraseña"
            value={usuario.contraseña}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <button type="button" onClick={handleCancelar}>Cancelar</button>
          <button type="button" onClick={handleConfirmar}>Confirmar</button>
        </div>
      </form>
    </div>
  );
};

export default RegistroUsuario;
