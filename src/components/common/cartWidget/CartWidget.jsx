import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../cartContext/CartContext";
import "./CartWidget.css";
const CartWidget = () => {
  const { getTotalQuantity } = useContext(CartContext);

  let total = getTotalQuantity();

  return (
    <div className="carrito">
      <Link to="/cart" style={{ color: "black" }}>
        <Badge badgeContent={total} color="primary" showZero>
          <ShoppingCartIcon
            color="main"
            sx={{ fontSize: 40, fontFamily: "bitwise" }}
          />
        </Badge>
      </Link>
    </div>
  );
};

export default CartWidget;
