import React from 'react';
import { useStateValue } from '../StateProvider';
import './CheckoutProduct.css';
import toast from "react-hot-toast";

function CheckoutProduct({id ,title,price,rating,image}) {
  const [{basket},dispatch] = useStateValue();

    const removeFromBasket = () =>{
      console.log(basket?.length);
      toast.success("Product removed successfully");
         dispatch({
            type:'REMOVE_FROM_BASKET',
            id:id,     
        });
     };
  
    return (
    <div className='checkoutProduct'>
        <img className='checkoutProduct_image' src={image} alt="Error"/>
        <div className='checkoutProduct_info'>
            <p className='cheackoutproduct_title'>{title}</p>
            <p className='cheackoutproduct_price'>
                <big>Rs.</big>
                <strong>{price}</strong>
            </p>
            <div style={{display:'flex'}} className='checkoutproduct__rating'>
          {Array(rating).fill().map((_) => (
            <p>⭐</p> 
          ))}  
        </div>
        <button onClick={removeFromBasket}> Remove From Cart</button>

      </div>
    </div>
  )
} 

export default CheckoutProduct;
