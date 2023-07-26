import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import ProductCard from "../../components/common/productCard/ProductCard";

const ItemList = ({ items }) => {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <section
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        paddingTop: "50px",
        gap: "20px",
      }}
    >
      {items.length > 0
        ? items.map((item) => <ProductCard key={item.id} item={item} />)
        : arr.map((elemento) => (
            <Stack spacing={1} key={elemento}>
              <Skeleton variant="rectangular" width={300} height={400} />
              <Skeleton variant="rectangular" width={100} height={40} />
              <Skeleton variant="rounded" width={100} height={40} />
            </Stack>
          ))}
    </section>
  );
};

export default ItemList;
