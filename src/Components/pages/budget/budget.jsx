
const Budget = () => {
  return (
    <form action="" method="get">
      <fieldset>
        <h1>Budget</h1><hr/><br/>
        <div>
          <label htmlFor="id-reception"> ID recepción: </label>
          <input id="id-reception" type="text" value="" size="28"/>
        </div>
        <div>
          <label htmlFor="description">Descripción de la reparación: </label><br/>
          <textarea id="description" rows="7" cols="41"></textarea>
        </div>
        <div>
          <label htmlFor="materials-list">Lista de materiales: </label><br/>
          <textarea id="materials-list" rows="7" cols="41">
          </textarea>
        </div>
        <div>
          <label htmlFor="warranty-end-date">Fecha finalización de garantía: </label>
          <input id="warranty-end-date" type="date"/>
        </div>
        <br/>
        <input type="submit" value="Enviar"></input>
        <input type="button" value="Cancelar"/>
      </fieldset>
    </form>
  )
}

export default Budget
