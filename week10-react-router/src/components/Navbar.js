import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        background: "#222",
        padding: "15px",
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        gap: "30px",
      }}
    >
      <Link to="/" style={{ color: "white", textDecoration: "none" }}>
        Home
      </Link>
      <Link to="/about" style={{ color: "white", textDecoration: "none" }}>
        About
      </Link>
      <Link to="/contact" style={{ color: "white", textDecoration: "none" }}>
        Contact
      </Link>
      <Link to="/user/10" style={{ color: "white", textDecoration: "none" }}>
        User
      </Link>
    </nav>
  );
}

export default Navbar;
