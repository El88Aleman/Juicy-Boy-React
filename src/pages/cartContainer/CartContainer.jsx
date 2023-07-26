import { useContext } from "react";
import { CartContext } from "../../components/cartContext/CartContext";
import Swal from "sweetalert2";

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
            style={{ width: "200px", border: "2px solid steelblue" }}
          >
            <h3>{elemento.title}</h3>
            <h3>{elemento.price}</h3>
            <h4>Cantidad:{elemento.quantity}</h4>
            <button onClick={() => deleteById(elemento.id)}>Eliminar</button>
            <h4>El total de la compra es:${total}</h4>
          </div>
        );
      })}
      {cart.length > 0 && <button onClick={limpiar}>Limpiar Carrito</button>}
      <h2>El total del carrito es:${total}</h2>
      <button>Terminar Compra</button>
    </div>
  );
};

export default CartContainer;
