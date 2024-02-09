import { useEffect } from "react";
import "./App.css";
import CartContainer from "./components/CartContainer";
import NavBar from "./components/NavBar";
import cartItems from "./cartItems";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotals } from "./features/cart/CartSlice";

function App() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((store) => store.cart);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  return (
    <main>
      <NavBar />
      <CartContainer />
    </main>
  );
}

export default App;
