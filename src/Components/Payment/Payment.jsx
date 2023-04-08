import React, { useState } from 'react';
import './Payment.css';
import logo from '../Login/images/amazonlogo.png';
import { useLocation,Link,useNavigate } from 'react-router-dom';
import { useStateValue } from '../StateProvider';


const PaymentPage = () => {
  const [{ basket,user}] = useStateValue();
  const { state: productPrice } = useLocation();
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [pincord, setpincord] = useState('');
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
    // };
    basket.length =0;
    navigate('/');
  };

  return (
    <div>
      <form className='form_container' onSubmit={handleSubmit}>
      <div>
      <Link to='/' >
     <img className='login_logo'
     src = {logo} alt="error" /> </Link>
      </div>
      <p  style={{color:'blue'}}>--------Shipping details----------- </p>

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
        <div>
          <label className='label__filed' htmlFor="quantity"> Total Product Quantity:</label>
          <input  className='input-filed' type="number" id="quantity" value={basket?.length}  readonly />
        </div>
        <p  style={{color:'Green'}}>--------Payment details----------- </p>
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
        <button className='paynow' type="submit">Pay Now</button>
      </form>
    </div>
  );
};

export default PaymentPage;
