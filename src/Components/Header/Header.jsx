import React from 'react';
import './Header.css';
import Subheader from './Subheader';
import toast from "react-hot-toast";

import  { Link }  from "react-router-dom";

import india from './images/flage.jpeg';
import headerlogo from './images/amzlogo.png';

import { FaSearch } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import { BsFillCaretDownFill } from 'react-icons/bs';
import { MdLocationOn } from "react-icons/md";

import { useStateValue } from '../StateProvider';
import auth  from "../Login/firebase";
//import { SlLocationPin } from "react-icons/si";

function Header() {
    
    
    const [{ basket,user }] = useStateValue();
  
    const handleAuthentication = () => {
        if (user) {
          auth.signOut();
          toast.success("Logout successfully");
          console.log("logout")
        }
      };

    return (
        <>
            <div className="header">
                <Link to="/">
                <img className='amz_logo'
                    src={headerlogo} alt="Error" /> 
                </Link>
                
                <div className='location'> <MdLocationOn /></div>
                <div className='header-option'>
                    <span className='header_op_l1'>Deliver to </span>
                    <span className='header_op_l2'> India</span>
                </div>
                <div className='header_search '>
                    <div className='Searchall'>
                        <p >All</p>
                    </div>
                    <input
                        className='searchinput' type="text" placeholder='Search Amazon' />
                    <div className='Searchicon'>
                        <FaSearch />
                    </div>
                </div>



                <div className='header_nav'>

                    <div className='header-option responsive'>
                        <span className='header_op_l1'> <img src={india} style={{ height: '22px', width: '40px' }} alt="ERROR" /> </span>
                        <span className='header_op_l2'>EN <BsFillCaretDownFill /> </span>
                    </div>

                    <div    className='header-option'>
                        <span className='header_op_l1'>
                        Hello, {user ? user?.email : "Guest "}
                        <Link to= {  "/login"} >
                        <span onClick={handleAuthentication} > 
                          { user ? '   Log Out ':' Sign In '}
                        </span>    </Link>              
                        </span>
                        <span className='header_op_l2 responsive'>Account & Lists <BsFillCaretDownFill /> </span>
                    </div>

                    <div className='header-option responsive'>
                        <span className='header_op_l1'>Return</span>
                        <span className='header_op_l2'>& Order</span>
                    </div>

                    <div className='header-option responsive'>
                        <span className='header_op_l1'>Your</span>
                        <span className='header_op_l2'>Prime</span>
                    </div>
                    <Link to='/checkout'>
                        <div className='header-option'>
                            <span><FaShoppingCart /> {basket?.length}</span>
                            <span className='header_op_l2'>Cart</span>
                        </div>
                    </Link>
                    {/* <a style={{textDecoration:'none'}} href='/checkout' >
                    <div className='header-option'>
                        <span> <FaShoppingCart /> {basket?.length} </span>
                        <span className='header_op_l2'>Cart</span>
                    </div>
                    </a> */}
                </div>
            </div>

            <Subheader />
        </>
    );
}

export default Header;


  // let { state:email } = useLocation();
    // console.log(email);

    // const [user,setUser]= useState('Geust');
    // let [signin,setSignin]= useState('Sign In');
    //const[mail,setmail]=useState("Guest");

    // useEffect( ()=>{
    // console.log("i an randreing");
    // setmail(`${email}`);
    // },[email]);

    // if(email === null){     //  default case...
    //     email = 'Guest';
    // }