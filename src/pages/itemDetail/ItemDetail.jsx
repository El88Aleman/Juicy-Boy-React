/* import { ToggleButton, ToggleButtonGroup } from "react-bootstrap"; */
import CounterContainer from "../../components/common/counter/CounterContainer";
/* import { useState } from "react"; */

const ItemDetail = ({ product, agregarAlCarrito, cantidadEnCarrito }) => {
  /* const [value, setValue] = useState([1, 3]);
  const handleChange = (val) => setValue(val); */

  return (
    <div
      style={{
        fontFamily: "bitwise",
        margin: "10px",
        textAlign: "center",
      }}
    >
      <h1 style={{ padding: "5px" }}>{product.title}</h1>
      {Array.isArray(product.img) && product.img.length > 0 && (
        <img
          style={{
            height: "250px",
            width: "175px",
            borderRadius: "20px",
          }}
          src={product.img[0]}
          alt="Juicy-Boy"
        />
      )}
      <h3 style={{ padding: "10px" }}>${product.price}</h3>
      {/* <div
        style={{
          marginLeft: "40px",
          marginBottom: "20px",
        }}
      >
        <ToggleButtonGroup
          style={{ backgroundColor: "#e66fdd" }}
          type="checkbox"
          value={value}
          onChange={handleChange}
        >
          <ToggleButton
            style={{ backgroundColor: "#e66fdd", color: "black" }}
            id="tbg-btn-1"
            value={1}
          >
            Talle 1
          </ToggleButton>
          <ToggleButton
            style={{ backgroundColor: "#e66fdd" }}
            id="tbg-btn-2"
            value={2}
          >
            Talle 2
          </ToggleButton>
          <ToggleButton
            style={{ backgroundColor: "#e66fdd" }}
            id="tbg-btn-3"
            value={3}
          >
            Talle 3
          </ToggleButton>
        </ToggleButtonGroup>
      </div> */}
      <CounterContainer
        stock={product.stock}
        talles={product.talles}
        agregarAlCarrito={agregarAlCarrito}
        cantidadEnCarrito={cantidadEnCarrito}
      />
    </div>
  );
};

export default ItemDetail;
