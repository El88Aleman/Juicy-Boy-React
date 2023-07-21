import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextComponent = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    let existe = cart.some((elemento) => elemento.id === product.id);
    if (existe) {
      let newArr = cart.map((elemento) => {
        if (product.id === elemento.id) {
          return {
            ...elemento,
            quantity: elemento.quantity + product.quantity,
          };
        } else {
          return elemento;
        }
      });

      setCart(newArr);
    } else {
      setCart([...cart, product]);
    }
    const clearCart = () => {
      setCart([]);
    };
    const deleteById = (id) => {
      let newArr = cart.filter((elemento) => elemento.id !== id);
      setCart(newArr);
    };
  };
  let data = {
    cart,
    addToCart,
    clearCart,
    deleteById,
  };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextComponent;
