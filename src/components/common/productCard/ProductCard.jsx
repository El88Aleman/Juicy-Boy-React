const ProductCard = ({ item }) => {
  return (
    <div>
      <h2>{item.title}</h2>
      <h3>{item.price}</h3>
      <h3>{item.description}</h3>
      <img src={item.img} alt="" />
    </div>
  );
};

export default ProductCard;
