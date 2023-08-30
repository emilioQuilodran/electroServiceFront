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


      <form onSubmit={handleReg}>

      <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            placeholder=""
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="apellido">Apellido</label>
          <input
            type="text"
            placeholder=""
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            placeholder=""
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="button-group">
          <button type="submit">Confirmar</button>
          <button type="submit">Cancelar</button>
        </div>

      </form>
    </div>
  );
};

export default Client;
