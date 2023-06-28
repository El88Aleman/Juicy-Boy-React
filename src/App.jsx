import Navbar from "./components/layout/navBar/Navbar";
import Footer from "./components/layout/footer/Footer";
import { useState } from "react";
import ItemListContainer from "./pages/itemListContainer/ItemListContainer";
import CounterContainer from "./components/common/counter/CounterContainer";
function App() {
  const [mostrarComponente, setMostrarComponente] = useState(false);

  const [numero, setNumero] = useState(0);

  return (
    <div>
      <Navbar />
      <Footer />
      <button onClick={() => setNumero(numero + 1)}>Sumar Numero</button>
      <button onClick={() => setMostrarComponente(!mostrarComponente)}>
        Montar/Desmontar
      </button>
      {mostrarComponente && <ItemListContainer />}
      <CounterContainer />
    </div>
  );
}
export default App;
