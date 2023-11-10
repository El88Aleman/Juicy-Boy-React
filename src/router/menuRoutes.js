import CartContainer from "../pages/cartContainer/CartContainer";
import FormFormik from "../pages/formik/FormFormik";
import ItemDetailContainer from "../pages/itemDetail/ItemDetailContainer";
import ItemListContainer from "../pages/itemListContainer/ItemListContainer";

export const routes = [
  {
    id: "home",
    path: "/",
    Element: ItemListContainer,
  },
  {
    id: "category",
    path: "/category/:categoryName",
    Element: ItemListContainer,
  },
  {
    id: "detail",
    path: "/itemDetail/:id",
    Element: ItemDetailContainer,
  },
  {
    id: "cart",
    path: "/cart",
    Element: CartContainer,
  },
  {
    id: "formik",
    path: "/formik",
    Element: FormFormik,
  },
];
