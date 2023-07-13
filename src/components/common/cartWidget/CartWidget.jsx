import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./CartWidget.css";

import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <div className="carrito">
      <Link to="/cart" style={{ color: "black" }}>
        <Badge badgeContent={4} color="primary">
          <ShoppingCartIcon color="main" sx={{ fontSize: 40 }} />
        </Badge>
      </Link>
    </div>
  );
};

export default CartWidget;
