import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  return (
    <Card style={{ textAlign: "center" }} sx={{ width: 300 }}>
      <CardMedia
        sx={{ height: 500 }}
        image={item.img}
        key={item.id}
        title="Juicy-Boy"
      />
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
      <CardActions style={{ display: "flex", justifyContent: "center" }}>
        <Link to={`/itemDetail/${item.id}`}>
          <Button
            style={{
              fontFamily: "bitwise",
              fontSize: "15px",
              backgroundColor: "#e66fdd",
              color: "black",
            }}
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
