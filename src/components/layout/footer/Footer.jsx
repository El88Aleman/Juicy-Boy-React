import { Link } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="footer">
      <h3 className="titulo">© 2023 Juicy Boy</h3>
      <Link className="flecha" onClick={scrollToTop}>
        <FaArrowUp size={25} />
      </Link>
    </div>
  );
};

export default Footer;
