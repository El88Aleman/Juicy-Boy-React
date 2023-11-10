import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import "./ProductCard.css";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  return (
    <Card sx={{ width: 300 }}>
      <CardMedia sx={{ height: 500 }} image={item.img} title="green iguana" />
      <CardContent>
        <Typography
          style={{ fontFamily: "bitwise", height: "10vh" }}
          gutterBottom
          variant="h5"
          component="div"
        >
          {item.title}
        </Typography>
        <Typography
          style={{ fontFamily: "bitwise", fontSize: "20px", height: "5vh" }}
          variant="body2"
          color="text.primary"
        >
          {item.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/itemDetail/${item.id}`}>
          <Button
            style={{ fontFamily: "bitwise", fontSize: "15px" }}
            variant="contained"
          >
            Ver detalle
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
