import Navbar from "./components/layout/navBar/Navbar";
import Footer from "./components/layout/footer/Footer";
import ItemListContainer from "./pages/itemListContainer/ItemListContainer";
import CounterContainer from "./components/common/counter/CounterContainer";

function App() {
  return (
    <div>
      <Navbar />
      <Footer />
      <ItemListContainer />
      <CounterContainer />
    </div>
  );
}
export default App;
