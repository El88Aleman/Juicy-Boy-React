import { useState } from "react";
import Counter from "./Counter";
import useCounter from "../../utils/hooks/useCounter";

const CounterContainer = ({ agregarAlCarrito, stock }) => {
  const { sumar, restar, counter } = useCounter(1, stock);

  return (
    <Counter
      counter={counter}
      sumar={sumar}
      restar={restar}
      agregarAlCarrito={agregarAlCarrito}
      stock={stock}
    />
  );
};

export default CounterContainer;
