
import './App.css';
import Footer from './components/footer/Footer';
import Navbar from './components/header/Navbar';
import Maincomp from './components/home/Maincomp';
import Newnav from './components/newnav/Newnav';
import Sign_In from './components/signup_sign/Sign_In';
import SignUp from './components/signup_sign/SignUp';
import { Routes, Route } from 'react-router-dom';
import Cart from './components/cart/Cart';
import Buynow from './components/buynow/Buynow';
import CircularProgress from '@mui/material/CircularProgress';
import { useEffect, useState } from 'react';



function App() {

  const [data, setData] = useState(false);


  useEffect(()=>{
    setTimeout(()=>{
      setData(true)
    },2000)
  },[])

  return (
  <>

   {
    data ? (
    <>
        <Navbar/>
   <Newnav/>
   <Routes>
    <Route path='/' element={<Maincomp/>} />
    <Route path='/login' element={<Sign_In/>} />
    <Route path='/register' element={<SignUp/>} />
    <Route path='/getproductsone/:id' element={<Cart/>} />
    <Route path='/buynow' element={<Buynow/>} />
   </Routes>
   <Footer/>

    </>
    ) : (
      <div className='circle'>
        <CircularProgress/>
        <h2>Loading...</h2>
      </div>
    )
   }

   
  </>
  );
}

export default App;
