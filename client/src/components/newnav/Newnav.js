import React from 'react';
import '../newnav/newnav.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const Newnav = () => {
  return (
    <div className='new_nav'>
      <div className='nav_data'>
        <div className='left_data'>
            <p><ShoppingCartIcon/>All</p>
            <p>Mobile</p>
            <p>Bestseller</p>
            <p>Fashion</p>
            <p>Customer Services</p>
            <p>Electronics</p>
            <p>Prime</p>
            <p>Today's deal</p>
            <p>Amazon Pay</p>
        </div>
        <div className='right_data'>
            <img src='https://www.91-cdn.com/hub/wp-content/uploads/2022/07/Prime-video-web-series.jpeg' alt='navdata'/>
            
        </div>
      </div>
    </div>
  )
}

export default Newnav
