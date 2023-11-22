import { useContext } from "react";
import { CartContext } from "../../components/cartContext/CartContext";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const CartContainer = () => {
  const { cart, clearCart, deleteById, getTotalPrice } =
    useContext(CartContext);

  let limpiar = () => {
    Swal.fire({
      title: "Estas seguro de eliminar todo el carrito?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Si, quiero borrar todo",
      denyButtonText: `No, quiero continuar la compra`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Carrito eliminado con exito", "", "success");
        window.location.assign("/");
      } else if (result.isDenied) {
        Swal.fire("La compra sigue en funcionamiento", "", "info");
      }
    });
  };
  let total = getTotalPrice();
  return (
    <div>
      {cart.map((elemento) => {
        return (
          <div
            key={elemento.id}
            style={{
              width: "250px",
              border: "2px solid steelblue",
              fontFamily: "bitwise",
              margin: "10px",
            }}
          >
            <h3 style={{ margin: "5px" }}>{elemento.title}</h3>
            <h3 style={{ margin: "5px" }}>${elemento.price}</h3>
            <h3 style={{ margin: "5px" }}>Cantidad: {elemento.quantity}</h3>
            <Button
              variant="outlined"
              style={{
                margin: "5px",
                backgroundColor: "#e66fdd",
                color: "black",
                fontFamily: "bitwise",
                fontSize: "15px",
              }}
              onClick={() => deleteById(elemento.id)}
            >
              Eliminar
            </Button>
          </div>
        );
      })}
      {cart.length > 0 && (
        <Button
          variant="contained"
          style={{
            margin: "5px",
            backgroundColor: "#e66fdd",
            color: "black",
            fontFamily: "bitwise",
            fontSize: "15px",
          }}
          onClick={limpiar}
        >
          Limpiar Carrito
        </Button>
      )}
      {cart.length > 0 && (
        <Link to="/formik">
          <Button
            variant="contained"
            style={{
              margin: "5px",
              backgroundColor: "#e66fdd",
              color: "black",
              fontFamily: "bitwise",
              fontSize: "15px",
            }}
          >
            Terminar Compra
          </Button>
        </Link>
      )}
      <h2
        style={{
          fontFamily: "bitwise",
          margin: "5px",
        }}
      >
        El total del carrito es: ${total}
      </h2>
    </div>
  );
};

export default CartContainer;
