import { useState } from "react";

const Footer = ({ producto }) => {
  const [contador, setContador] = useState(0);

  const sumar = () => {
    setContador(contador + 1);
  };
  return (
    <div>
      <h1>Cantidad de {producto}</h1>
      <h2>{contador}</h2>
      <button onClick={sumar}>Agregar Al Carrito</button>
    </div>
  );
};

export default Footer;
