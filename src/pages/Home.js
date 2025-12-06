import { Link } from "react-router-dom";
import products from "../data/product";

const Home = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Laptops</h2>

      <div style={styles.grid}>
        {products.map((p) => (
          <div key={p.id} style={styles.card}>
            <img src={p.image} alt={p.title} style={styles.image} />

            <h4 style={styles.title}>{p.title}</h4>
            <p style={styles.price}>₹{p.price}</p>

            <Link to={`/product/${p.id}`} style={styles.button}>
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: 20,
  },
  heading: {
    marginBottom: 20,
    fontSize: 28,
    fontWeight: "600",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
    gap: 20,
  },
  card: {
    border: "1px solid #ddd",
    padding: 15,
    borderRadius: 10,
    background: "#fff",
    textAlign: "center",
    transition: "0.3s",
    boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
    cursor: "pointer",
  },
  image: {
    width: "100%",
    height: 150,
    objectFit: "contain",
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    margin: "10px 0",
    minHeight: 50,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1a73e8",
    marginBottom: 10,
  },
  button: {
    display: "inline-block",
    padding: "8px 12px",
    background: "#1a73e8",
    color: "#fff",
    borderRadius: 6,
    textDecoration: "none",
    fontSize: 14,
    transition: "0.3s",
  },
};

export default Home;
