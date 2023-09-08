import { Link } from 'react-router-dom'
import './style.scss'
const Home = () => {
  return (
    <div className='HomeWrapper'>
      <h1>Hola soy la Home</h1>
      <h2>Páginas</h2>
      <ul style={{padding: 0}}>
        <li style={{listStyle: "none", padding: 5}}><Link to="/user">Usuario</Link></li>
        <li style={{listStyle: "none", padding: 5}}><Link to="/employees">Empleados</Link></li>
        <li style={{listStyle: "none", padding: 5}}><Link to="/client">Clientes</Link></li>
        <li style={{listStyle: "none", padding: 5}}><Link to="/materials">Materiales</Link></li>
        <li style={{listStyle: "none", padding: 5}}><Link to="/budget">Presupuestos</Link></li>
        <li style={{listStyle: "none", padding: 5}}><Link to="/reception">Recepción</Link></li>
        <li style={{listStyle: "none", padding: 5}}><Link to="/providers">Proveedores</Link></li>
        <li style={{listStyle: "none", padding: 5}}><Link to="/clientList">Lista de clientes</Link></li>
      </ul>
    </div>
  )
}

export default Home
