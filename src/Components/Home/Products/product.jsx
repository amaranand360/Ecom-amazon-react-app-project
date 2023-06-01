import React from 'react';
import './product.css';
import { useStateValue } from '../../StateProvider';
import toast from "react-hot-toast";

function Product({ id, title, price, rating, image }) {
  const[{ basket },dispatch] = useStateValue();

  const addToBasket = () => {
    toast.success("Product added successfully");
    console.log("this is the basket len ",basket?.length);
    dispatch({
      type:'ADD_TO_BASKET',
      item:{
        id:id,
        title:title,
        price:price,
        rating:rating,
        image:image,      
      },
     });
     
  };
  
  return (
    <div className='product'>

      <div className='product_info'>
        <p className='product_title'> {title} </p>
        <p className='product_price'>
          <big>Rs.</big>
          <strong>{price}</strong>
        </p>
        <p className='product_rating'>
          {Array(rating).fill().map((_) => (
            <p>⭐</p>
          ))}  
        </p>
      </div>

      <img className='image' src={image} alt="Error" />
      <button onClick= {addToBasket} >Add to Cart</button>

    </div>
  );
}

export default Product;
