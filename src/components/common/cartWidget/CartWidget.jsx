import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../cartContext/CartContext";

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  return (
    <Link to="/cart" style={{ color: "black" }}>
      <Badge badgeContent={cart.length} color="primary">
        <ShoppingCartIcon color="main" sx={{ fontSize: 40 }} />
      </Badge>
    </Link>
  );
};

export default CartWidget;
