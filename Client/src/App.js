//import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './component/Login';
import Dashboard from "./pgs/Dashboard";
import Users from "./pgs/Users";
import Barang from "./pgs/Barang";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/barang" element={<Barang />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
