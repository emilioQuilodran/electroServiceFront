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

  //confirmar
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

  
  //canceal
  const handleCancelar = () => {

    setUsuario({
      nombre: '',
      apellido: '',
      email: '',
      genero: '',
      usuario: '',
      contraseña: '',
      rol: 'cliente'
    });
  };

  //drop
  const [selected, setSelected] = useState('');

  const handleChange = event => {
    console.log('Label 👉️', event.target.selectedOptions[0].label);
    console.log(event.target.value);

    setSelected(event.target.value);
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
          <label htmlFor="genero">Genero:</label>

            <select value={selected} onChange={handleChange}>
              <option disabled={true} value="">
                --Elija una opcion--
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>

        </div>

        <div>
          <label htmlFor="usuario">Usuario:</label>
          <input
            type="text"
            id="usuario"
            name="usuario"
            value={usuario.usuario}
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
