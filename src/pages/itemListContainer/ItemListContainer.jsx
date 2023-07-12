import { useState, useEffect } from "react";
import { products } from "../../productsMock";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    let productosFiltrados = products.filter(
      (elemento) => elemento.category === categoryName
    );
    const tarea = new Promise((resolve, reject) => {
      resolve(categoryName ? productosFiltrados : products);
      // reject("salio todo mal")
    });

    tarea
      .then((respuesta) => setItems(respuesta))
      .catch((error) => console.log(error));

    // .finally(()=>console.log("hola"))
  }, [categoryName]);

  return <ItemList items={items} />;
};

export default ItemListContainer;
