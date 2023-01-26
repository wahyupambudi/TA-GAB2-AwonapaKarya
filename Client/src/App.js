//import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './component/Login';
import Header from './component/Header';
import Home from './component/Home';
import SideNav from './component/SideNav';
import Footer from './component/Footer';
//import './App.css';
import Dashboard from "./pgs/Dashboard";
import Users from "./pgs/Users";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/header" element={<Header />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/home" element={<Home />} />
          <Route path="/sidenav" element={<SideNav />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
