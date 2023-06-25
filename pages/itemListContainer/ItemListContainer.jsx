import { useState } from "react";
import ItemList from "./ItemList";
const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  const [edad, setEdad] = useState(20);

  console.log("se monto o se actualizo");

  return (
    <ItemList
      edad={edad}
      setEdad={setEdad}
      products={products}
      setProducts={setProducts}
    />
  );
};

export default ItemListContainer;
