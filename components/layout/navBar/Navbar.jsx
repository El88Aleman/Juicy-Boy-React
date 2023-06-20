import CartWidget from "../../common/cartWidget/CartWidget";
import "./NavBar.css";
const Navbar = () => {
  return (
    <div className="contenedor">
      <ul className="menu">
        <img
          className="logo"
          src="https://res.cloudinary.com/dfcnmxndf/image/upload/v1686949692/CAJA_SIN_FONDO_gfxdzz.png"
          alt="Juicy-Boy"
        />
        <a href="">
          <li>Remerones</li>
        </a>
        <a href="">
          <li>Buzos</li>
        </a>
      </ul>
      <CartWidget />
    </div>
  );
};

export default Navbar;
