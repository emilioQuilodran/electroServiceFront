
import { Route, Routes } from "react-router-dom";
import Home from './Components/pages/home/home';
import User from './Components/pages/user/user';
import Client from './Components/pages/client/client';
import Employees from './Components/pages/employees/employees';
import Materials from './Components/pages/materials/materials';
import Budget from './Components/pages/budget/budget';
import Reception from './Components/pages/reception/reception';
import Providers from './Components/pages/providers/providers';
import Footer from './Components/pages/Footer/footer.jsx';

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
          <Route path="/Footer" element={<Footer />} />
        </Routes>
    </div>
  );
}

export default App;
