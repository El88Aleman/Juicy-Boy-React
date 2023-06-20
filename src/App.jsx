import Navbar from "../components/layout/navBar/Navbar";
import Footer from "../components/layout/footer/Footer";
import ItemListContainer from "../components/itemListContainer/ItemListContainer";
function App() {
  return (
    <div>
      <Navbar />
      <Footer />
      <ItemListContainer greeting="Bienvenidos a React somos Juicy Boy 😊!" />
    </div>
  );
}
export default App;
