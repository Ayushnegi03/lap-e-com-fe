const AdminDashboard = () => {
  // Dummy stats data (replace with real data)
  const stats = [
    { label: "Total Products", value: 124, bgColor: "#4caf50" },
    { label: "Total Orders", value: 89, bgColor: "#2196f3" },
    { label: "Total Users", value: 42, bgColor: "#ff9800" },
    { label: "Revenue", value: "₹1,23,456", bgColor: "#9c27b0" },
  ];

  // Dummy recent orders data
  const recentOrders = [
    { id: 1, customer: "John Doe", product: "Dell Inspiron", amount: "₹65,000", status: "Delivered" },
    { id: 2, customer: "Jane Smith", product: "HP Pavilion", amount: "₹72,000", status: "Pending" },
    { id: 3, customer: "Sam Wilson", product: "MacBook Air", amount: "₹95,000", status: "Cancelled" },
  ];

  return (
    <div style={{ padding: 24, fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      <header style={{ marginBottom: 30 }}>
        <h1 style={{ fontSize: 32, color: "#222", marginBottom: 8 }}>Admin Dashboard</h1>
        <p style={{ color: "#555", fontSize: 16 }}>Welcome, Admin! Here are some stats and quick actions.</p>
      </header>

      {/* Stats Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: 20,
          marginBottom: 40,
        }}
      >
        {stats.map(({ label, value, bgColor }) => (
          <div
            key={label}
            style={{
              backgroundColor: bgColor,
              color: "white",
              borderRadius: 12,
              padding: 20,
              boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "bold",
              fontSize: 24,
              userSelect: "none",
            }}
          >
            <div style={{ fontSize: 14, marginBottom: 6, opacity: 0.9 }}>{label}</div>
            <div>{value}</div>
          </div>
        ))}
      </div>

      {/* Recent Orders Table */}
      <section>
        <h2 style={{ marginBottom: 12, color: "#333" }}>Recent Orders</h2>
        <table style={{ width: "100%", borderCollapse: "collapse", boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}>
          <thead style={{ backgroundColor: "#f0f0f0" }}>
            <tr>
              <th style={thStyle}>Order ID</th>
              <th style={thStyle}>Customer</th>
              <th style={thStyle}>Product</th>
              <th style={thStyle}>Amount</th>
              <th style={thStyle}>Status</th>
            </tr>
          </thead>
          <tbody>
            {recentOrders.map(({ id, customer, product, amount, status }) => (
              <tr key={id} style={{ borderBottom: "1px solid #ddd" }}>
                <td style={tdStyle}>{id}</td>
                <td style={tdStyle}>{customer}</td>
                <td style={tdStyle}>{product}</td>
                <td style={tdStyle}>{amount}</td>
                <td style={{ ...tdStyle, color: getStatusColor(status), fontWeight: "600" }}>{status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

const thStyle = {
  padding: "12px 15px",
  textAlign: "left",
  fontWeight: "600",
  color: "#555",
  borderBottom: "2px solid #ddd",
};

const tdStyle = {
  padding: "12px 15px",
  color: "#444",
};

const getStatusColor = (status) => {
  switch (status.toLowerCase()) {
    case "delivered":
      return "#4caf50"; // green
    case "pending":
      return "#ff9800"; // orange
    case "cancelled":
      return "#f44336"; // red
    default:
      return "#555";
  }
};

export default AdminDashboard;
