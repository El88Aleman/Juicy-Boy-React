import { BrowserRouter, Routes } from "react-router-dom";
import ItemListContainer from "./pages/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./pages/itemDetail/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/productos" element={<ItemListContainer />} />
        <Route path="/itemDetail" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
