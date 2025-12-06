import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("user");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
  e.preventDefault();
  login(username, role);

  // Navigate to correct dashboard based on role
  if (role === "admin") {
    navigate("/admin/dashboard");
  } else {
    navigate("/dashboard");
  }
};


  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #6b73ff 0%, #000dff 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          background: "#fff",
          padding: "40px 30px",
          borderRadius: "12px",
          boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
          width: "100%",
          maxWidth: "400px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "10px", color: "#333" }}>
          Login to Your Account
        </h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          style={{
            padding: "14px 18px",
            borderRadius: "8px",
            border: "1.5px solid #ddd",
            fontSize: "16px",
            outline: "none",
            transition: "border-color 0.3s",
          }}
          onFocus={(e) => (e.target.style.borderColor = "#6b73ff")}
          onBlur={(e) => (e.target.style.borderColor = "#ddd")}
        />

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          style={{
            padding: "14px 18px",
            borderRadius: "8px",
            border: "1.5px solid #ddd",
            fontSize: "16px",
            outline: "none",
            cursor: "pointer",
            transition: "border-color 0.3s",
          }}
          onFocus={(e) => (e.target.style.borderColor = "#6b73ff")}
          onBlur={(e) => (e.target.style.borderColor = "#ddd")}
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>

        <button
          type="submit"
          style={{
            backgroundColor: "#6b73ff",
            color: "white",
            padding: "14px",
            borderRadius: "8px",
            border: "none",
            fontWeight: "bold",
            fontSize: "16px",
            cursor: "pointer",
            boxShadow: "0 4px 12px rgba(107, 115, 255, 0.5)",
            transition: "background-color 0.3s",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#4a54e1")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#6b73ff")}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
