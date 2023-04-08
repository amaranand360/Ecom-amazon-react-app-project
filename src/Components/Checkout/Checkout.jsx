import React from 'react';
import "./checkout.css";
import Subtotal from './Subtotal';
import { useStateValue } from '../StateProvider';
import CheckoutProduct from './CheckoutProduct';
import adds from '../../images/adds.png';

function Checkout() {
  const [{ basket,user}] = useStateValue();

  return (
    <>
    <div className='checkout'>
       
      <div className='checkout_left'>
        <div  >
        <img className="checkout_add"
        src={adds} 
        alt="error" /> 
        </div>
        <h3 style={{textAlign:'center'}}>Hello {user?.email}</h3>
      { basket?.length === 0 ? (
        <div>
            <h2 className="checkout_msg">Your Shopping Cart is Empty</h2>
            <p><big>OPPS!</big> You have no item Right Now To pruches products atlest one item should be in your basket.so plz <strong>ADD TO CART</strong> </p>
            </div>
      ) :(
        <div > 
            <h2 className='checkout_title'>Your Shopping Cart</h2>
            
            {basket?.map((item) => (
            <CheckoutProduct
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              rating={item.rating}
            />
          ))}       
        </div>
      )
      }
      </div>
      <div className='checkout_right'>
        <Subtotal />
      </div>

    </div>

    </>
  )
}

export default Checkout;

