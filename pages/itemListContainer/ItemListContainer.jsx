import { useState } from "react";
import ItemList from "./ItemList";
const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  console.log(products);
  const [edad, setEdad] = useState(20);

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
