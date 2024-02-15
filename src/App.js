import { useEffect } from "react";
import "./App.css";
import CartContainer from "./components/CartContainer";
import NavBar from "./components/NavBar";
import Modal from "./components/Modal";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotals } from "./features/cart/CartSlice";

function App() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  return (
    <main>
      <NavBar />
      <CartContainer />
      {isOpen && <Modal />}
    </main>
  );
}

export default App;
