import { useContext } from "react";
import { CartContext } from "../../components/cartContext/CartContext";

const CartContainer = () => {
  const { cart, clearCart, deleteById } = useContext(CartContext);
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
          </div>
        );
      })}
      <button onClick={clearCart}>Limpiar Carrito</button>
    </div>
  );
};

export default CartContainer;
