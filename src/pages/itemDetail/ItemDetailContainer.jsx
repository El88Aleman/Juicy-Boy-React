import { useState } from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({
    id: 1,
    name: "Remerones",
    price: 8500,
    stock: 5,
  });

  const agregarAlCarrito = (cantidad) => {
    let data = {
      ...product,
      quantity: cantidad,
    };
    console.log(data);
  };
  return (
    <ItemDetail
      product={product}
      setProduct={setProduct}
      agregarAlCarrito={agregarAlCarrito}
    />
  );
};

export default ItemDetailContainer;
