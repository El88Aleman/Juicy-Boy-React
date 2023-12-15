import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import "./ProductCard.css";
import { useState } from "react";

const ProductCard = ({ item }) => {
  const [sliderImage, setSliderImage] = useState(0);

  const siguienteImagen = () => {
    setSliderImage(sliderImage === item.img.length - 1 ? 0 : sliderImage + 1);
  };

  const anteriorImagen = () => {
    setSliderImage(sliderImage === 0 ? item.img.length - 1 : sliderImage - 1);
  };

  return (
    <Card style={{ textAlign: "center" }} sx={{ width: 300 }}>
      <div style={{ position: "relative", width: "100%" }}>
        <CardMedia
          sx={{ height: 500 }}
          image={item.img[sliderImage]}
          title="Juicy-Boy"
        />
        <div>
          <span
            className="back"
            style={{
              color: "white",
              position: "absolute",
              top: "50%",
              left: "2rem",
              transform: "translate(-50%, -50%)",
            }}
          >
            <IoIosArrowBack
              onClick={anteriorImagen}
              className="icon"
              size={60}
            />
          </span>
          <span
            className="next"
            style={{
              color: "white",
              position: "absolute",
              top: "50%",
              right: "2rem",
              transform: "translate(50%, -50%)",
            }}
          >
            <IoIosArrowForward
              onClick={siguienteImagen}
              className="icon"
              size={60}
            />
          </span>
        </div>
      </div>

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
