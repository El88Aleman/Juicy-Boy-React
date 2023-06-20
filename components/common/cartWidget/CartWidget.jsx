import { Badge } from "react-bootstrap";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./CartWidget.css";
const CartWidget = () => {
  return (
    <div className="carrito">
      <Badge badgeContent={12} color="primary">
        <ShoppingCartIcon color="action" />
        <span className="caja">3</span>
      </Badge>
    </div>
  );
};

export default CartWidget;
