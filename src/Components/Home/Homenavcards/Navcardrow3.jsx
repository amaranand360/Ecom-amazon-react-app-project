import React from 'react';
import "./Navcardrow1.css";

import iteam9 from './images/r3p1.jpg';
import iteam10 from './images/r3p2.jpg';
import iteam11 from './images/r3p3.jpg';
import iteam12 from './images/r3p4.jpg';


function Navcardrow3() {
  return (
    <div>
      <div className='home__nav__row3'>
    <div className='product-cards'>
    <h3 className='product-heading'>Discover fashion trends</h3>
    <div className='product-image'>
        <img src={iteam9}  alt="error" />
    </div>

        <p className='about'>see Now</p>
     </div>

     <div className='product-cards'>
    <h3 className='product-heading'>For your Fitness Needs</h3>
    <div className='product-image'>
        <img src={iteam10}  alt="error" />
    </div>

        <p className='about'>Shop Now</p>
     </div>

     <div className='product-cards'>
    <h3 className='product-heading'>Shop activity trackers and smartwatches</h3>
    <div className='product-image'>
        <img src={iteam11} alt="error" />
    </div>

        <p className='about'>Shop Now</p>
     </div>


    <div className='product-cards last'>
        <h4 className='product-heading'>For pet lovers</h4>

        <div className='product-image'>
            <img src={iteam12} alt='Error' />
        </div>
        <div>
            <p className='about' >Explore More</p>
        </div>
    </div>
</div>
    </div>
  )
}

export default Navcardrow3
