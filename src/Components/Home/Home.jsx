import React from 'react';
import './Home.css';
import Imgcrousel from './Imgslider/Imgcrousel';
import  Productslirow1 from "./productslider/Productslirow1";
import  Productslider from "./productslider/Productslider";
import Navcardrow1 from './Homenavcards/Navcardrow1';
import Productinfo from './Products/Productinfo'
import Navcardrow3 from './Homenavcards/Navcardrow3';
import Footer from './Footer.jsx';
import { Link } from 'react-router-dom';

function App() {
    return (
    <div className='home'>
    <Imgcrousel />
        
    <Navcardrow1 />
    
    <Productslirow1 />

    <Productinfo />

    <Navcardrow3 />

    <Productslider />

    <div className='Login_container_margin'>
    <div className="LOGIN_PART">
        <p>See personalized recommendations</p>
        <Link to='login'>
        <button className='signin_btn'>sign in</button>
        </Link>
        <p style={{fontSize:'12px'}}>New customer? Start here.</p>

    </div>
    </div>
   

    <a href='/#'>
    <div className='Backtop'>
        <p>Back to top</p>
    </div>

    </a>

  

    <Footer />


    </div>
    );
}

export default App;

