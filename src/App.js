import { Routes, Route, Navigate } from "react-router-dom";
// import Home from "./pages/Home";
import Login from "./pages/Login";
import { getDashboardRoutes } from "./routes/dashboardRoutes";
import ProductDetails from "./pages/ProductDetails";
import { useAuth } from "./context/AuthContext";

const App = () => {
  const {user} = useAuth()
  return (
    <Routes>
      {/* PUBLIC ROUTES */}
            <Route path="/" element={user ? <Navigate to="/dashboard" /> : <Navigate to="/auth-login" />} />
      {/* Login route */}
      <Route path="/auth-login" element={<Login />} />

      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/login" element={<Login />} />

      {/* DASHBOARD ROUTES */}
      {getDashboardRoutes(user)}
    </Routes>
  );
}

export default App;
