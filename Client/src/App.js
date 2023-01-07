import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./component/Login";
import Barangm from "./pages/Barangm";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/barangm" element={<Barangm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
