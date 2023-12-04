import React,{useContext} from 'react';
import Avatar from '@mui/material/Avatar';
import { LoginContext } from '../context/ContextProvider';
import { NavLink } from 'react-router-dom';
import { Divider } from '@mui/material';
import "./rightheader.css";
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';

const Rightheader = ({Logclose,Logoutuser}) => {

    const { account, setAccount } = useContext(LoginContext);

    return (
        <>
            <div className='rightheader'>
                <div className='right_nav'>

                    {
                        account ? <Avatar className='avtar2' >{account.fname[0].toUpperCase()}</Avatar> :
                            <Avatar className='avtar' ></Avatar>
                    }

                    {account ? <h3>Hello, {account.fname.toUpperCase()}</h3>: ""}
                </div>

                <div className='nav_btn' onClick={()=>Logclose()}>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/">Shop By Category</NavLink>

                    <Divider style={{ width: "100%", marginLeft: "-20px" }}/>

                    <NavLink to="/">Today's Deal</NavLink>
                    {
                        account ? <NavLink to="/buynow">Your orders</NavLink> : <NavLink to="/login">Your orders</NavLink>
                    }
                    
                    <Divider  style={{ width: "100%", marginLeft: "-20px" }}/>

                    <div className='flag'>
                        <NavLink to="/">Settings</NavLink>
                         <SettingsIcon style={{marginLeft:3,marginBottom:15 }}/>
                    </div>
                    {
                        account ? 
                        <div className='flag'>
                           <LogoutIcon style={{fontSize:18, marginRight:4}}/>
                           <h3 onClick={()=>Logoutuser()} style={{cursor:"pointer", fontWeight:500}}>Logout</h3>
                        </div> : 
                        <NavLink to="login">SignIN</NavLink>
                    }
                </div>
            </div>
        </>
    )
}

export default Rightheader
