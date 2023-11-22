import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  let userRol = "customer";
  return (
    <div className={"containerNavbar"}>
      <Link to="/">
        <img
          className="logo"
          src="https://res.cloudinary.com/dfcnmxndf/image/upload/v1686949692/CAJA_SIN_FONDO_gfxdzz.png"
          alt="Juicy-Boy"
        />
      </Link>

      <ul className="categories">
        <span className="menu">
          <a href="/">TODAS</a>
        </span>
        <span className="menu">
          <a href="/category/Blanco">BLANCAS</a>
        </span>
        <span className="menu">
          <a href="/category/Negro">NEGRAS</a>
        </span>
      </ul>
      {userRol === "admin" && <Link to="/dashboard">ADMIN</Link>}
      <CartWidget />
    </div>
  );
};

export default Navbar;
