import Navbar from "../components/layout/navBar/Navbar";
import Footer from "../components/layout/footer/Footer";
import ItemListContainer from "../pages/itemListContainer/ItemListContainer";
import { useState } from "react";
function App() {
  const { mostrarComponente, setMostrarComponente } = useState(false);

  return (
    <div>
      <Navbar />
      <Footer />
      <button onClick={() => setMostrarComponente(!mostrarComponente)}>
        Montar/Desmontar
      </button>
      {mostrarComponente && <ItemListContainer />}
    </div>
  );
}
export default App;
