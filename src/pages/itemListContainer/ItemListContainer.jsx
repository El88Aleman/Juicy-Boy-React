import { useState, useEffect } from "react";
import ItemList from "./ItemList";
const ItemListContainer = ({ numero }) => {
  const [products, setProducts] = useState([]);

  const [edad, setEdad] = useState(20);

  useEffect(() => {
    console.log("llamando a una Api");
    setProducts([{}, {}]);
  }, []);
  console.log("Se actualizo");
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
