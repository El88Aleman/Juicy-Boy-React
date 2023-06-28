const ItemList = ({ edad, setEdad, products, setProducts }) => {
  return (
    <div>
      <h1>Aca van los items</h1>
      <h2>{edad}</h2>
      <button onClick={() => setEdad(edad + 1)}>Incrementar edad</button>
      <button onClick={() => setProducts([...products, {}])}>
        Agregar Producto
      </button>
    </div>
  );
};

export default ItemList;
