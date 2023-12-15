import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const carritoInicial = JSON.parse(localStorage.getItem("cart")) || [];

const CartContextComponent = ({ children }) => {
  const [cart, setCart] = useState(carritoInicial);

  // 5
  const addToCart = (product) => {
    let existe = cart.some((elemento) => elemento.id === product.id);
    if (existe) {
      let newArr = cart.map((elemento) => {
        if (product.id === elemento.id) {
          return {
            ...elemento,
            quantity: product.quantity,
          };
        } else {
          return elemento;
        }
      });

      setCart(newArr);
    } else {
      setCart([...cart, product]);
    }
  };

  const clearCart = () => {
    setCart([]);
  };
  const deleteById = (id) => {
    const targetProduct = cart.find((elemento) => elemento.id === id);

    if (targetProduct) {
      // Si la cantidad es mayor a 1, disminuye la cantidad en 1
      if (targetProduct.quantity > 1) {
        const newArr = cart.map((elemento) =>
          elemento.id === id
            ? { ...elemento, quantity: elemento.quantity - 1 }
            : elemento
        );
        setCart(newArr);
      } else {
        // Si la cantidad es 1, elimina el producto completamente
        const newArr = cart.filter((elemento) => elemento.id !== id);
        setCart(newArr);
      }
    }
  };
  /* const deleteById = (id) => {
    let newArr = cart.filter((elemento) => elemento.id !== id);
    setCart(newArr);
  }; */
  const getTotalQuantity = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.quantity;
    }, 0);
    return total;
  };
  const getTotalPrice = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.price * elemento.quantity;
    }, 0);
    return total;
  };
  const getQuantityById = (id) => {
    let producto = cart.find((elemento) => elemento.id === +id);
    return producto?.quantity;
  };
  let data = {
    cart,
    addToCart,
    clearCart,
    deleteById,
    getTotalQuantity,
    getTotalPrice,
    getQuantityById,
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextComponent;
