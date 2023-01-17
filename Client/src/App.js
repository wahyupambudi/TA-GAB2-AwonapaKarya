import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./component/Login";
import Users from "./pages/Users";
import Barangs from "./pages/Barangs";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import AddBarangs from "./pages/AddBarangs";
import EditBarangs from "./pages/EditBarangs";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/add" element={<AddUser />} />
          <Route path="/users/edit/:id" element={<EditUser />} />
          <Route path="/barangs" element={<Barangs />} />
          <Route path="/barangs/add" element={<AddBarangs />} />
          <Route path="/barangs/edit/:id" element={<EditBarangs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
