import React from 'react';
import "./Productslider.css";
import Card from './Card';

import cart26 from './prosliderimage/prot-r2-6.jpg';
import cart27 from './prosliderimage/prot-r2-7.jpg';
import cart28 from './prosliderimage/prot-r2-8.jpg';
import cart29 from './prosliderimage/prot-r2-9.jpg';
import cart30 from './prosliderimage/prot-r2-10.jpg';
import cart31 from './prosliderimage/prot-r2-11.jpg';
import cart32 from './prosliderimage/prot-r2-12.jpg';
import cart33 from './prosliderimage/prot-r2-13.jpg';
import cart34 from './prosliderimage/prot-r2-14.jpg';
import cart35 from './prosliderimage/prot-r2-15.jpg';
import cart36 from './prosliderimage/prot-r2-16.jpg';
import cart37 from './prosliderimage/prot-r2-5.jpg';



function Productslirow1() {
    let box3=400;
    box3 = document.querySelector('.thirdrow');
    let width = box3?.clientWidth;

    const handlePrevth = ()=>{

        box3.scrollLeft = box3.scrollLeft - width;
        console.log(width)

    }
    const handleNextth = ()=>{

        box3.scrollLeft = box3.scrollLeft + width;
        console.log(width)

    }
  return (
    <div>
      <div className='item_container'>
                <div className='product_slider'>
                    <h4>Popular Electronic items this season</h4>
                    <button className='pre_btn' onClick={handlePrevth}><p>&lt;</p></button>
                    <button className='next_btn' onClick={handleNextth}><p>&gt;</p></button>
                    <div className='product_container thirdrow'>
                        <Card image={cart26} />
                        <Card image={cart27} />
                        <Card image={cart28} />
                        <Card image={cart29} />
                        <Card image={cart30} />
                        <Card image={cart31} />
                        <Card image={cart32} />
                        <Card image={cart33} />
                        <Card image={cart34} />
                        <Card image={cart35} />
                        <Card image={cart36} />
                        <Card image={cart37} />

                        
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Productslirow1;
