import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store"; // RootState to'g'ri import qilinganiga ishonch hosil qiling
import { removeFromCart, clearCart, updateQuantity } from "../store/cartSlice";

const Basket: React.FC = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleRemove = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleIncrement = (id: number) => {
    const item = cartItems.find(item => item.id === id);
    if (item) {
      dispatch(updateQuantity({ id, quantity: item.quantity + 1 }));
    }
  };

  const handleDecrement = (id: number) => {
    const item = cartItems.find(item => item.id === id);
    if (item) {
      if (item.quantity > 1) {
        dispatch(updateQuantity({ id, quantity: item.quantity - 1 }));
      } else {
        dispatch(removeFromCart(id));
      }
    }
  };

  return (
    <div className="basket container">
      <h2>Savat</h2>

      {cartItems.length === 0 ? (
        <p>Savat bo‘sh</p>
      ) : (
        <>
          <div className="basket_items">
            {cartItems.map((item) => (
              <div className="basket_item" key={item.id} style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
                <img
                  src={item.images?.[0] || "https://via.placeholder.com/100"}
                  alt={item.title}
                  className="basket_item_img"
                  style={{ width: "100px", height: "100px", objectFit: "cover", marginRight: "15px" }}
                />
                <div className="basket_item_info" style={{ flex: 1 }}>
                  <h3>{item.title}</h3>
                  <p>Narxi: {item.price}$</p>
                  <p>
                    Soni: 
                    <button onClick={() => handleDecrement(item.id)} style={{ marginLeft: "10px", marginRight: "5px" }}>-</button>
                    {item.quantity}
                    <button onClick={() => handleIncrement(item.id)} style={{ marginLeft: "5px" }}>+</button>
                  </p>
                  <button className="btn_clear" onClick={() => handleRemove(item.id)} style={{ marginTop: "10px", backgroundColor: "red", color: "white", border: "none", padding: "5px 10px", cursor: "pointer" }}>
                    O‘chirish
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="basket_summary" style={{ marginTop: "20px" }}>
            <h3>Umumiy narx: {totalPrice.toFixed(2)}$</h3>
            <button onClick={handleClearCart} style={{ backgroundColor: "#007bff", color: "#fff", padding: "10px 20px", border: "none", borderRadius: "5px", cursor: "pointer" }}>
              Savatni tozalash
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Basket;

