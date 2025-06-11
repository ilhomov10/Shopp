import { useParams, useNavigate } from "react-router-dom";
import { useProductById } from "../services/api";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice"; // to‘g‘ri yo‘l bilan import qiling

const ProductId: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  if (!id) {
    return (
      <div className="container">
        ID topilmadi. Asosiy sahifaga yo‘naltirilmoqda...
      </div>
    );
  }

  const { data: product, isLoading, error } = useProductById(parseInt(id));

  const handleBuyNow = () => {
    if (product) {
      dispatch(addToCart({ ...product, quantity: 1 }));
      navigate("/basket");
    }
  };

  if (isLoading) return <div className="container">Loading...</div>;
  if (error) return <div className="container">Error loading product.</div>;
  if (!product) return <div className="container">Product not found.</div>;

  return (
    <div className="container">
      <div className="product">
        <img src={product.images?.[0] || ""} alt={product.title} />
        <div className="product_info">
          <h2 className="product_title">{product.title}</h2>
          <p className="product_rating">{product.rating} ★</p>
          <p className="product_price">{product.price} $</p>
          <p className="product_text">Description: {product.description}</p>
          <button className="product_buy" onClick={handleBuyNow}>
            Sotib Olish
          </button>
          <button className="product_back" onClick={() => navigate(-1)}>
            ← Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductId;

