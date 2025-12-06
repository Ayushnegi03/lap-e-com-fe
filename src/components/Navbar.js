import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { cart } = useCart();
  const { user, logout } = useAuth();

  return (
    <nav style={{ padding: 20, background: "#eee" }}>
      <Link to="/">Home</Link> | 
      <Link to="/cart">Cart ({cart.length})</Link>

      {user?.role === "admin" && <> | <Link to="/admin/add-product">Add Product</Link></>}

      {user ? (
        <>
          {" "} | <button onClick={logout}>Logout</button>
        </>
      ) : (
        <> | <Link to="/login">Login</Link></>
      )}
    </nav>
  );
};

export default Navbar;
