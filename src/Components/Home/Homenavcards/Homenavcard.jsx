import React from 'react';

function Homenavcard({ title ,image,footer}) {
  return (
    <div>
    <div className='nav__card'>
        <div className="product_card_info">
        <h3 className='product-heading'>{title}</h3>
        <img src={image}  alt='Error'/>
        <p className='nav_link'>{footer}</p>
        </div>
    </div>
    </div>
)
}

export default Homenavcard;
