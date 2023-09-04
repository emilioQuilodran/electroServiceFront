import React, { useState } from 'react';

const RegistroUsuario = () => {
  const [usuario, setUsuario] = useState({
    nombre: '',
    apellido: '',
    email: '',
    contraseña: '',
    rol: 'cliente'
  });

  const [contraseñaValida, setContraseñaValida] = useState(true);

  const [selected, setSelected] = useState('');

  const validarNombreApellido = (nombre, apellido) => {
    const regex = /^[A-Za-z]+$/; //permite solo letras minusculas y mayus

    if (!nombre || !apellido) {
      //cambio vacio retorna false
      return false;
    }

    if (!regex.test(nombre) || !regex.test(apellido)) {
      //si ingresa caracteres retorna false
      return false;
    }

    return true;
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === 'nombre' || name === 'apellido') {
      const regex = /^[A-Za-z]*$/; //permite solo letras minusculas y mayus

      if (!value.match(regex)) {
        return;
      }
    }

    setUsuario((prevUsuario) => ({
      ...prevUsuario,
      [name]: value
    }));
  };

  const handleConfirmar = () => {
    if (validarContraseña(usuario.contraseña)) {

      const usuarioConID = {
        ...usuario,
        ID: 'IDTEST'
      };

      console.log('Usuario registrado:', usuarioConID);
      setUsuario({
        nombre: '',
        apellido: '',
        email: '',
        contraseña: '',
        rol: 'cliente'
      });
      setContraseñaValida(true);
    } else {
      setContraseñaValida(false);
      alert('La contraseña debe tener al menos 8 caracteres, una mayúscula, un número y un símbolo.');
    }
  };

  const handleCancelar = () => {
    setUsuario({
      nombre: '',
      apellido: '',
      email: '',
      contraseña: '',
      rol: 'cliente'
    });
    setContraseñaValida(true);
  };

  const handleChange = (event) => {
    console.log('Label', event.target.selectedOptions[0].label);
    console.log(event.target.value);

    setSelected(event.target.value);
  };


  const validarContraseña = (contraseña) => {
    //Leng 8
    if (contraseña.length < 8) {
      return false;
    }

    //Mayus
    if (!/[A-Z]/.test(contraseña)) {
      return false;
    }

    //num
    if (!/\d/.test(contraseña)) {
      return false;
    }

    //Simb
    if (!/[-!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(contraseña)) {
      return false;
    }

    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault(); //Evita envío automático

    // Validar campos vacíos
    if (
      usuario.nombre === '' ||
      usuario.apellido === '' ||
      usuario.email === '' ||
      usuario.usuario === '' ||
      usuario.contraseña === '' ||
      selected === ''
    ) {
      alert('Todos los campos son obligatorios.');
      return;
    }


    console.log('Formulario enviado:', usuario);
  };



  //BODY
  return (
    <div className='formUsuario'>
      <h2>Registro de Usuario</h2>
      <form className='formPartes' onSubmit={handleSubmit}>
        <div className='test123'>
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

        <div className='test123'>
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

        <div className='test123'>
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

        <div className='test123'>
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

        <div className='test123'>
          <label htmlFor="genero">Género:</label>
          <select
            name="genero" // Asegúrate de que el atributo name sea "genero"
            value={usuario.genero}
            onChange={handleInputChange}
            required
          >
            <option disabled={true} value="">
              --Elija una opción--
            </option>
            <option value="1">Masc</option>
            <option value="2">Fem</option>
            <option value="3">Nodecirlo</option>
          </select>
        </div>


        <div className='test123'>
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

        <div className='botones'>
          <button type="button" onClick={handleCancelar} className='boton cancelar'>Cancelar</button>
          <button type="submit" onClick={handleConfirmar} className='boton confirmar'>Confirmar</button>
        </div>
      </form>

      <div className="error">
        {!contraseñaValida && (
          <p >La contraseña debe tener al menos 8 caracteres, una mayúscula, un número y un símbolo.</p>
        )}
      </div>

    </div>
  );
};

export default RegistroUsuario;