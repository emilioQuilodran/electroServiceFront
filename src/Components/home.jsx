import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>Hola soy la Home</h1>
      <h2>Páginas</h2>
      <ul>
        <li><Link to="/user">Usuario</Link></li>
        <li><Link to="/employees">Empleados</Link></li>
        <li><Link to="/client">Clientes</Link></li>
        <li><Link to="/materials">Materiales</Link></li>
        <li><Link to="/budget">Presupuestos</Link></li>
        <li><Link to="/reception">Recepción</Link></li>
        <li><Link to="/providers">Proveedores</Link></li>
      </ul>
    </div>
  )
}

export default Home
