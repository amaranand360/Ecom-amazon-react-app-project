import React from 'react';
import { Link } from 'react-router-dom';

import "./Navcardrow1.css";

import iteam1 from './images/r1p1.jpg';
import iteam2 from './images/r1p12.jpg';
import iteam3 from './images/rip2.jpg';
import iteam4 from './images/r1p3.jpg';
import iteam5 from './images/r1p4.jpg';
import iteam6 from './images/r2p1.jpg';

import iteam7 from './images/r2p2.jpg';
import iteam8 from './images/r2p3.jpg';
import iteam9 from './images/r2p4.jpg';



function Navcardrow1() {
    // const navigate = useNavigate();
    // const Loginfun = ()=>{
    //     navigate('/login');
    // }
  
  return (
   
<>  <div className='home__nav__row1 first_navcard_row'>
<div className='product-cards'>

    <h3 className='product-heading'>Gaming accessories</h3>

    <div className='product-image' style={{paddingTop:'30px' }}>
        <img src={iteam1} style={{height: '40%', width:'80%'}} alt='Error' />
       <p> <strong>Gaming PC</strong></p>
        <img src={iteam2} style={{height: '40%', width:'80%'}} alt='Error' />
        <p><strong>Gaming Keybord</strong></p>
    </div>

    <p className='about'>See More</p>

    </div>
    


<div className='product-cards'>
<h3 className='product-heading'>Shop Laptops & Tablets</h3>
    <div className='product-image'>
        <img src={iteam3}  alt="error" />
    </div>

        <p className='about'>Shop Now</p>

</div>

<div className='product-cards'>
<h3 className='product-heading'>Dresses</h3>
    <div className='product-image'>
        <img src={iteam4} alt="error" />
    </div>

        <p className='about'>Shop Now</p>

</div>


<div className='product-cards last'>
    <h3 className='product-heading'>Sign in for the best experience</h3>
    <Link to="/login">
    <button type='submit' className='btn'
    >Sign In Securely </button>
    </Link>
   
    <div className='product-image'>
        <img src={iteam5} style={{ height: '78%', width: '100%' }} alt='Error' />
    </div>
</div>

</div>

<div className='home__nav__row2'>
    <div className='product-cards'>
    <h3 className='product-heading'>Get fit at home</h3>
    <div className='product-image'>
        <img src={iteam6}  alt="error" />
    </div>

        <p className='about'>Explore Now</p>
     </div>

     <div className='product-cards'>
    <h3 className='product-heading'>Beauty Picks</h3>
    <div className='product-image'>
        <img src={iteam7}  alt="error" />
    </div>

        <p className='about'>Shop Now</p>
     </div>

     <div className='product-cards'>
    <h3 className='product-heading'>Health & Personal care</h3>
    <div className='product-image'>
        <img src={iteam8} alt="error" />
    </div>

        <p className='about'>Shop Now</p>
     </div>


    <div className='product-cards '>
        <h4 className='product-heading'>Easy returns</h4>

        <div className='product-image'>
            <img src={iteam9} alt='Error' />
        </div>
        <div>
            <p className='about' >Learn More</p>
        </div>
    </div>
</div>


</> 
  )
}

export default Navcardrow1;

