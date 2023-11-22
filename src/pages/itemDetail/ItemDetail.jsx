import CounterContainer from "../../components/common/counter/CounterContainer";

const ItemDetail = ({ product, agregarAlCarrito }) => {
  return (
    <div
      style={{
        fontFamily: "bitwise",
        margin: "10px",
      }}
    >
      <h1 style={{ padding: "5px" }}>{product.title}</h1>
      <img
        style={{
          height: "250px",
          width: "175px",
          borderRadius: "20px",
          marginLeft: "60px",
        }}
        src={product.img}
        alt="Juicy-Boy"
      />
      <h3 style={{ padding: "10px", marginLeft: "90px" }}>${product.price}</h3>

      <CounterContainer
        stock={product.stock}
        talles={product.talles}
        agregarAlCarrito={agregarAlCarrito}
      />
    </div>
  );
};

export default ItemDetail;
