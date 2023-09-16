import "./Subtotal.css";
import { useStateValue } from "../StateProvider";
import { getBasketTotal } from "../reducer";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Subtotal() {
  const navigate = useNavigate();
  const [{ basket, user }] = useStateValue();
  const amount = getBasketTotal(basket);

  const hanblepaymentclick = () => {
    if (basket.length <= 0) {
      toast.error("Your cart is empty");
    } else if (user) {
      toast.success("Procuding for Payment");
      navigate("/payment", {
        state: amount,
      });
    } else {
      toast.error("Login first");
      navigate("/login");
    }
  };
  return (
    <div className="subtotal">
      <>
        <>
          <p>
            Subtotal( {basket?.length} items):
            <strong> Rs.{amount}</strong>
          </p>
          <small className="subtotal_gift">
            <input type="checkbox" /> This Order Contains a Gift
          </small>
        </>
      </>

      <button className="paybtn" onClick={hanblepaymentclick}>
        Procude to Checkout
      </button>
    </div>
  );
}

export default Subtotal;