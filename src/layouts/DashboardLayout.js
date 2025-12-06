import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const DashboardLayout = ({ userRole, username }) => {
  console.log('username>>',username)
  const [collapsed, setCollapsed] = useState(false);

  // Sidebar links based on role
  const links = userRole === "admin"
    ? [
      { to: "/admin/dashboard", label: "Dashboard" },
      { to: "/admin/dashboard/products", label: "Products" },
      { to: "/admin/dashboard/orders", label: "Orders" },
    //   { to: "/admin/dashboard/users", label: "Users" },
    ]
    : [
        { to: "/dashboard", label: "Dashboard" },
        { to: "/dashboard/orders", label: "My Orders" },
        { to: "/dashboard/profile", label: "Profile" },
      ];

  return (
    <div style={{ display: "flex", height: "100vh", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      {/* Sidebar */}
      <aside
        style={{
          width: collapsed ? "60px" : "220px",
          backgroundColor: "#2c3e50",
          color: "#ecf0f1",
          transition: "width 0.2s ease",
          display: "flex",
          flexDirection: "column",
          paddingTop: "20px",
          position: "relative",
        }}
      >
        <div style={{ padding: "0 20px", marginBottom: 20, fontWeight: "bold", fontSize: 18 }}>
          {collapsed ? "DB" : `Hello, ${username}`}
        </div>

        <button
          onClick={() => setCollapsed(!collapsed)}
          style={{
            background: "none",
            border: "none",
            color: "white",
            fontSize: "20px",
            cursor: "pointer",
            marginBottom: "20px",
            marginLeft: collapsed ? "5px" : "15px",
          }}
          title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? "☰" : "×"}
        </button>

        {links.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            style={({ isActive }) => ({
              padding: "12px 20px",
              display: "block",
              color: isActive ? "#1abc9c" : "#ecf0f1",
              textDecoration: "none",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              fontWeight: isActive ? "bold" : "normal",
            })}
          >
            {collapsed ? label.charAt(0) : label}
          </NavLink>
        ))}
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, padding: "20px", overflowY: "auto", background: "#f5f7fa" }}>
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
