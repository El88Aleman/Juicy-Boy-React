import { Button } from "@mui/material";
import { IoMdAdd } from "react-icons/io";
import { RiSubtractFill } from "react-icons/ri";

const Counter = ({ counter, setCounter, agregarAlCarrito, stock }) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          marginLeft: "70px",
        }}
      >
        <Button
          style={{ color: "black", backgroundColor: "#e66fdd" }}
          disabled={counter <= 1}
          variant="contained"
          onClick={() => setCounter(counter - 1)}
        >
          <RiSubtractFill size={20} />
        </Button>
        <h2 style={{ margin: "5px" }}>{counter}</h2>
        <Button
          style={{ color: "black", backgroundColor: "#e66fdd" }}
          disabled={counter >= stock}
          variant="contained"
          onClick={() => setCounter(counter + 1)}
        >
          <IoMdAdd size={20} />
        </Button>
      </div>
      <br />
      <Button
        style={{
          fontFamily: "bitwise",
          marginLeft: "50px",
          color: "black",
          backgroundColor: "#e66fdd",
        }}
        variant="contained"
        color="secondary"
        onClick={() => agregarAlCarrito(counter)}
      >
        Agregar al carrito
      </Button>
    </div>
  );
};

export default Counter;
