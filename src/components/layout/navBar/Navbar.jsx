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
        <Link to="/">Todas</Link>
        <Link to="/category/Blanco">Blancas</Link>
        <Link to="/category/Negro">Negras</Link>
      </ul>
      {userRol === "admin" && <Link to="/dashboard">ADMIN</Link>}
      <CartWidget />
    </div>
  );
};

export default Navbar;
