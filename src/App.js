import React ,{useEffect} from "react";
import { Toaster } from 'react-hot-toast';

import Header from './Components/Header/Header.jsx';
import Home from './Components/Home/Home.jsx';
import Checkout from './Components/Checkout/Checkout';
import Login from './Components/Login/Login.js';
import Payment from './Components/Payment/Payment';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useStateValue } from "./Components/StateProvider.js";
import  auth from "./Components/Login/firebase.js";

function App() {
  const [{user}, dispatch] = useStateValue();


  useEffect( ()=>{
    //will run once when the app component loads.....
    auth.onAuthStateChanged((authUser)=>{
      
        console.log('This user mail is >>>>',authUser.email);


      if (authUser) {
        // the user just logged in.

        dispatch({
          type:'SET_USER',
          user: authUser
        })
      }
      else{
        // user is loged out
        dispatch({
          type:'SET_USER',
          user: null
        })
        
      }
    })
  },[dispatch])


  return (
    <div className='App'>
      
      <Router>
        {/* <Header/> */}
        

      <div>
      <Routes>

      {/* <Route path="/" element={<Home /> }/>
      <Route path="/checkout" element={<Checkout />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='*' element={<h1>Oops Page not found! plz enter a valid `URL`</h1>}/> */}
      
      <Route path="/" element={ <> <Header /> <Home /> </> }/>
      <Route path="/checkout" element={<> <Header /> <Checkout /> </>}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/payment' element={<><Header /> <Payment /> </>} />
      <Route path='/user' element={<h1>{user} </h1>} />

      </Routes>
      < Toaster />
      </div>

    </Router>
           
   
    </div>
  );
}

export default App;



// import React from "react";

// import Navcardrow1 from "./Components/Home/Homenavcards/Navcardrow1";
// function App() {
//   return (
//     <>

//     <div className='app'>
//       <Navcardrow1 />
//       </div>

//     </>
    

//   )
// }

// export default App;
