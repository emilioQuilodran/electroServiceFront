import "./budget.scss";
import { Link } from "react-router-dom";

import { useState } from "react";

const Budget = () => {
  const [receptionId, setReceptionId] = useState("");
  const [description, setDescription] = useState("");
  const [materialsList, setMaterialsList] = useState("");
  const [date, setDate] = useState("");
  const [error, setError] = useState("");

  const FormHandler = (e) => {
    e.preventDefault();

    
    if (!receptionId || !description|| !materialsList || !date) {
      setError("Por favor complete todos los campos");
      return;
    }
  };

  return (
    <>
      <h1 className="budgetTitle">Presupuesto</h1>
      <form className="budgetForm" onSubmit={FormHandler}>
        <label htmlFor="receptionId">ID Recepción</label>
        <input
          type="text"
          id="receptionId"
          className="formItem"
          value={receptionId}
          onChange={(e) => setReceptionId(e.target.value)}
        />
        <label htmlFor="description">Descripción de la reparación</label>
        <input
          type="text"
          id="description"
          className="formItem"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label htmlFor="materialsList">Lista de materiales</label>
        <input
          type="text"
          id="materialsList"
          className="formItem"
          value={materialsList}
          onChange={(e) => setMaterialsList(e.target.value)}
        />
        <label htmlFor="date">Fecha validez garantía</label>
        <input
          type="date"
          id="date"
          className="formItem"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        {error && <p className="error"> {error} </p>}
        <button type="submit" className="submitBtn">
          Confirmar
        </button>
      </form>
      <Link to="/" className="homeBtn">
        {" "}
        ← Volver al inicio
      </Link>
    </>
  )
}

export default Budget