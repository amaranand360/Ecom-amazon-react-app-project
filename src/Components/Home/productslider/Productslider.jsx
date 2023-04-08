import React from 'react';
import "./Productslider.css";
import Card from './Card';

import cart1 from './prosliderimage/prot1.jpg';
import cart2 from './prosliderimage/prot2.jpg';
import cart3 from './prosliderimage/prot3.jpg';
import cart4 from './prosliderimage/prot4.jpg';
import cart5 from './prosliderimage/prot5.jpg';
import cart6 from './prosliderimage/prot6.jpg';
import cart7 from './prosliderimage/prot7.jpg';
import cart8 from './prosliderimage/prot8.jpg';
import cart9 from './prosliderimage/prot9.jpg';
import cart10 from './prosliderimage/prot10.jpg';
import cart11 from './prosliderimage/prot11.jpg';
import cart12 from './prosliderimage/prot12.jpg';
import cart13 from './prosliderimage/prot13.jpg';
import cart14 from './prosliderimage/prot14.jpg';
import cart15 from './prosliderimage/prot21.jpg';
import cart16 from './prosliderimage/prot16.jpg';
import cart17 from './prosliderimage/prot17.jpg';
import cart18 from './prosliderimage/prot18.jpg';
import cart19 from './prosliderimage/prot19.jpg';
import cart20 from './prosliderimage/prot20.jpg';
import cart21 from './prosliderimage/prot21.jpg';
import cart22 from './prosliderimage/prot-r2-1.jpg';
import cart23 from './prosliderimage/prot-r2-2.jpg';
import cart24 from './prosliderimage/prot-r2-3.jpg';
import cart25 from './prosliderimage/prot-r2-4.jpg';



function Productslider() {
    let box=300;
    let box2=200
    box =  document.getElementById('row1');
    box2 = document.getElementById('row2');
    

    const handlePrevSec = ()=>{

        let width = box2?.clientWidth;
        box2.scrollLeft = box2.scrollLeft - width;
        console.log(width)

    }
    const handleNextSec = ()=>{

        let width = box2?.clientWidth;
        box2.scrollLeft = box2.scrollLeft + width;
        console.log(width)

    }

    const handlePrev = ()=>{

        let width = box?.clientWidth;
        box.scrollLeft = box.scrollLeft - width;
        console.log(width)

    }
    const handleNext = ()=>{
        let width = box?.clientWidth;
        box.scrollLeft = box.scrollLeft + width;
        console.log(width)

    }

    return (
        <div>
            <div className='item_container'>
                <div className='product_slider'>
                    <h4>Frequently repurchased in Home</h4>
                    <button className='pre_btn' onClick={handlePrev}><p>&lt;</p></button>
                    <button className='next_btn' onClick={handleNext}><p>&gt;</p></button>
                    <div className='product_container' id='row1'>
                        <Card image={cart1} />
                        <Card image={cart2} />
                        <Card image={cart3} />
                        <Card image={cart4} />
                        <Card image={cart5} />
                        <Card image={cart6} />
                        <Card image={cart7} />
                        <Card image={cart8} />
                        <Card image={cart9} />
                        <Card image={cart10} />
                        <Card image={cart11} />
                        <Card image={cart12} />
                        <Card image={cart13} />
                        <Card image={cart14} />
                       
                    </div>
                </div>
            </div>

            <div className='item_container'>
                <div className='product_slider'>
                    <h4>Popular Home items this season</h4>
                    <button className='pre_btn' onClick={handlePrevSec}><p>&lt;</p></button>
                    <button className='next_btn' onClick={handleNextSec}><p>&gt;</p></button>
                    <div className='product_container' id='row2'>
                       
                        <Card image={cart15} />
                        <Card image={cart16} />
                        <Card image={cart17} />
                        <Card image={cart18} />
                        <Card image={cart19} />
                        <Card image={cart20} />
                        <Card image={cart21} />
                        <Card image={cart22} />
                        <Card image={cart23} />
                        <Card image={cart24} />
                        <Card image={cart25} />

                    </div>
                </div>
            </div>


        </div>
    )
}

export default Productslider;
