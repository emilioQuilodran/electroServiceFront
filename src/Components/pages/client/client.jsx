import React, { useState} from "react";
import './style.scss'

const Client = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");

  const handleReg = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica de autenticación
  };

  return (
    <div className="clientesReg">
      <h1>Registro de Clientes</h1>

      <h2>hola2</h2>

      <form onSubmit={handleReg}>
        <div className="input-group">
          <label htmlFor="nombre">Nombre </label>

          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="apellido">Apellido </label>

          <input
            type="text"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="email">Email </label>

          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button type="submit">Confirmar</button>
        <button type="submit">Cancelar</button>
      </form>
    </div>
  );
};

export default Client;
