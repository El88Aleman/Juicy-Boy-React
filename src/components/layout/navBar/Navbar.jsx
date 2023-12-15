import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  let userRol = "customer";
  return (
    <div className={"containerNavbar"}>
      <CartWidget />
      <Link to="/">
        <img
          className="logo"
          src="https://firebasestorage.googleapis.com/v0/b/juicy-boy.appspot.com/o/Juicy-Boy%2Fjuicy-boy-sinFondo.png?alt=media&token=ff012bbc-29a9-4645-a501-2d40ae3d5355"
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
    </div>
  );
};

export default Navbar;
