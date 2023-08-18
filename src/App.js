import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './Components/home';
import User from './Components/user';
import Client from './Components/client';
import Employees from './Components/employees';
import Materials from './Components/materials';
import Budget from './Components/budget';
import Reception from './Components/reception';
import Providers from './Components/providers';


const App = () => {
  return (
    <div className="App">
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/client" element={<Client />} />
          <Route path="/materials" element={<Materials />} />
          <Route path="/budget" element={<Budget />} />
          <Route path="/reception" element={<Reception />} />
          <Route path="/providers" element={<Providers />} />
        </Routes>
    </div>
  );
}

export default App;
