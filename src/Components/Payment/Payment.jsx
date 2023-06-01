import React, { useState } from 'react';
import './Payment.css';
import logo from '../Login/images/amazonlogo.png';
import { useLocation,Link,useNavigate } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import toast from "react-hot-toast";


const PaymentPage = () => {
  const [{ basket,user}] = useStateValue();
  const { state: productPrice } = useLocation();
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [pincord, setpincord] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardccv, setCardCCV] = useState('');
  const navigate = useNavigate();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  
  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handlepinChange = (event) => {
    setpincord(event.target.value);
  };

  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value);
  };

  //  const handleCardExpMonthChange = (event) => {
  //   setCardExpMonth(event.target.value);
  //  };
  // const cardExpMonth = (event) => {
  //   setCardExpMonth(event.target.value);
  // };
  
  const handleCardcccvhange = (event) => {
    setCardCCV(event.target.value);
  };
  
  


  const handleSubmit = (event) => {
    event.preventDefault();
    // const order = {
    //   name: name,
    //   email: user?.email,
    //   address: address,
    //   pincord :pincord,
    //   productPrice: productPrice,
    //   CardName : card,
    //   quantity: basket?.length,
    // cardName: cardName,
    // cardNumber: cardNumber,
    // expiryDate: expiryDate,
    // cvv: cvv,
    // };
    //toast.success(`Transaction Successfull`);
    basket.length =0;
    toast.success("order placed successfully");
    navigate('/');

  };

  return (
    <div>
      <form className='form_container' onSubmit={handleSubmit}>
      <div>
      <Link to='/' >
     <img className='login_logo' style={{margin:"0px",marginTop:"4px"}}
     src = {logo} alt="error" /> </Link>
      </div>
      <p  style={{color:'blue',margin:"0px 0px"}}>-------------Shipping details-------------- </p>

        <div>
          <label className='label__filed'  htmlFor="name">Name:</label>
          <input className='input-filed' type="text" id="name" value={name} onChange={handleNameChange} required />
        </div>
        <div>
          <label className='label__filed' htmlFor="email">Email:</label>
          <input  className='input-filed' type="email" id="email" value={user?.email}  readOnly />
        </div>
        <div>
          <label className='label__filed'  htmlFor="address">Delivery Address:</label>
          <textarea  className='input-filed' id="address" value={address} onChange={handleAddressChange} required />
        </div>
        <div>
          <label className='label__filed' htmlFor="pincord">Pin/Zip cord:</label>
          <input  className='input-filed' type="number" id="pincord" value={pincord} onChange={handlepinChange} required />
        </div>
        {/* <div>
          <label className='label__filed' htmlFor="quantity"> Total Product Quantity:</label>
          <input  className='input-filed' type="number" id="quantity" value={basket?.length}  readonly />
        </div> */}
        <p  style={{color:'Green'}}>-------------Payment details----------------- </p>
        
        <div>
          <label className='label__filed'  htmlFor="name"> Card Holder Name:</label>
          <input className='input-filed' type="text" id="name" value={name} onChange={handleNameChange} required />
        </div>

        <div>
          <label className='label__filed' htmlFor="productName"> Select Payment method:</label>
          <select className='input-filed' type="select" id="CardName" >
          <option value="card">Credit Card</option>
          <option value="card">Debit Card</option>
          </select>  
        </div>
      
        <div>
          <label className='label__filed' htmlFor="productPrice">Total Payable amount:</label>
          <input  className='input-filed' type="number" id="productPrice" value={productPrice}   readonly />
        </div>

        <div>
        <label className='label__filed' htmlFor="cardNumber">Card Number:</label>
          <input className='label__filed' type="number" id="cardNumber" value={cardNumber} onChange={handleCardNumberChange} maxlength="12" required />
        </div>

        <div>
          <label className='label__filed' htmlFor="cardExpMonth">Expiry date:</label>
          <input className='label__filed' type="date" id="cardExpMonth"  required />
        </div>
        <div>
          <label className='label__filed' htmlFor="cardccv">CCV:</label>
          <input className='label__filed' type="password" id="cardccv" value={cardccv}  onChange={handleCardcccvhange} maxlength="3" required />
          </div>
       

        <button className='paynow' type="submit">Pay Now</button>
      </form>
    </div>
  );
};

export default PaymentPage;
