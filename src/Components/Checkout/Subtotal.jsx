import "./Subtotal.css";
//import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../StateProvider';
import { getBasketTotal } from "../reducer";
import { useNavigate } from 'react-router-dom';


function Subtotal() {
  const navigate = useNavigate();
  const[{basket,user}] = useStateValue();
  const amount = getBasketTotal(basket);

  const hanblepaymentclick = ()=>{
    if(user){
    navigate('/payment',{ 
      state: amount,
    
  })
  }
  else{
    navigate('/login')
  }
  }
  return (
    <div className='subtotal'>
      <>
          <>
          <p>Subtotal( {basket?.length} items):
          <strong> Rs.{amount}</strong>
          </p>
          <small className='subtotal_gift'>
            <input type="checkbox" /> This Order Contains a Gift
          </small>
          </>
      
        {/* decimalScale={2}
        value={0} 
        displayType={'text'} 
        thousandSeparator={true} 
        prefix={'Rs'}  */}
      </>

       
      <button className="paybtn"  onClick={hanblepaymentclick}>Procude to Checkout</button> 
    </div>
  )
}

export default Subtotal;

// import React from "react";
// import "./Subtotal.css";
// import {CurrencyFormat} from "react";
// import { useStateValue } from "./StateProvider";
// import { getBasketTotal } from "./reducer";
// import { useLocation } from "react-router-dom";

// function Subtotal() {
//   const nevigate = useLocation();
//   const [{ basket }] = useStateValue();

//   console.log(basket);

//   return (
//     <div className="subtotal">
//       <CurrencyFormat
//         renderText={(value) => (
//           <>
//             <p>
//               Subtotal ({basket?.length} items): <strong>{value}</strong>
//             </p>
//             <small className="subtotal__gift">
//               <input type="checkbox" /> This order contains a gift
//             </small>
//           </>
//         )}
//         decimalScale={2}
//         value={getBasketTotal(basket)}
//         displayType={"text"}
//         thousandSeparator={true}
//         prefix={"Rs."}
//       />
//       <button
//         onClick={() => {
//           nevigate("/payment");
//         }}
//       >
//         Proceed to Checkout
//       </button>
//     </div>
//   );
// }

// export default Subtotal;
