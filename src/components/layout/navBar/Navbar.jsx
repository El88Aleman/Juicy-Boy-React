import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";

const Navbar = ({ children }) => {
  return (
    <div>
      <div className={"containerNavbar"}>
        <img
          className="logo"
          src="https://res.cloudinary.com/dfcnmxndf/image/upload/v1686949692/CAJA_SIN_FONDO_gfxdzz.png"
          alt="Juicy-Boy"
        />

        <ul className="categories">
          <li>Todas</li>
          <li>Deportivas</li>
          <li>Urbanas</li>
        </ul>

        <CartWidget />
      </div>
      {children}
    </div>
  );
};

export default Navbar;
