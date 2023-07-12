import { Button } from "@mui/material";
/* import { useState } from "react";
import ItemListContainer from "../../../pages/itemListContainer/ItemListContainer"; */

const Counter = ({
  counter,
  /* setCounter, */
  agregarAlCarrito,
  stock,
  sumar,
  restar,
}) => {
  /*      const [mostrarComponente, setMostrarComponente] = useState(false);

  const [numero, setNumero] = useState(0);  */
  return (
    <div>
      {/* {<div>
        <button onClick={() => setNumero(numero + 1)}>Sumar Numero</button>
        <button onClick={() => setMostrarComponente(!mostrarComponente)}>
          Montar/Desmontar
        </button>
        {mostrarComponente && <ItemListContainer />}
      </div>} */}
      <div style={{ display: "flex" }}>
        <Button disabled={counter < 1} variant="contained" onClick={restar}>
          -
        </Button>
        <h2>{counter}</h2>
        <Button disabled={counter > stock} variant="contained" onClick={sumar}>
          +
        </Button>
      </div>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => agregarAlCarrito(counter)}
      >
        Agregar al Carrito
      </Button>
    </div>
  );
};

export default Counter;
