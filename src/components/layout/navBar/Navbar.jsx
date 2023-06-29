import CartWidget from "../../common/cartWidget/CartWidget";
import "./NavBar.css";
const Navbar = () => {
  return (
    <div className="contenedor">
      <img
        className="logo"
        src="https://res.cloudinary.com/dfcnmxndf/image/upload/v1686949692/CAJA_SIN_FONDO_gfxdzz.png"
        alt="Juicy-Boy"
      />
      <ul className="menu">
        <a href="">
          <li>Remerones Oversize</li>
        </a>
        <a href="">
          <li>Buzos Oversize</li>
        </a>
      </ul>
      <CartWidget />
    </div>
  );
};

export default Navbar;
