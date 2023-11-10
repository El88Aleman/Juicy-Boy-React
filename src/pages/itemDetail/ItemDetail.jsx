import CounterContainer from "../../components/common/counter/CounterContainer";

const ItemDetail = ({ product, agregarAlCarrito }) => {
  return (
    <div style={{ fontFamily: "bitwise", margin: "10px" }}>
      <h1 style={{ padding: "5px" }}>{product.title}</h1>
      <h3 style={{ padding: "10px" }}>{product.price}</h3>

      <CounterContainer
        stock={product.stock}
        agregarAlCarrito={agregarAlCarrito}
      />
    </div>
  );
};

export default ItemDetail;
