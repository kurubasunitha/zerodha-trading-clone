import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Link, NavLink, useNavigate } from "react-router-dom";
import './NavBar.css'

function NavBar(){

  

  const navigate = useNavigate()
  
  function handleLogout(){
    localStorage.removeItem("access_token")
    navigate('/')
  }

  return (
    <div className="header-section">
        <div className="nifty-sensex-container">
            <p className="nifty-sensex-text">NIFTY <span>24813</span> 129.85(0.53%)</p>
            <p className="nifty-sensex-text">SENSEX <span>81589.86</span> 403.42(0.50%)</p>
        </div>
    <nav className="navbar">
      <div>
        <Link to='/Dashboard'>
        <img
          src="https://kite.zerodha.com/static/images/kite-logo.svg"
          alt="kite-logo"
          height={50}
          width={50}
        />
        </Link>
      </div>
      <div className='nav-links-con'>
      <div className="nav-container">
        <ul className="link-items-container">
          <li><NavLink to='/Dashboard' className="nav-link"><li>Dashboard</li></NavLink></li>
          <li><NavLink to='/orders' className="nav-link"><li>Orders</li></NavLink></li>
          <li><NavLink to='/holdings' className="nav-link"><li>Holdings</li></NavLink></li>
          <li><NavLink to='/positions' className="nav-link"><li>Positions</li></NavLink></li>
          <li><NavLink to='/bids' className="nav-link"><li>Bids</li></NavLink></li>
          <li><NavLink to='/funds' className="nav-link"><li>Funds</li></NavLink></li>
        </ul>
        <div className="icons-container">
          <IoCartOutline className="icon"/>
          <IoMdNotificationsOutline className="icon"/> 
        </div>
      </div>
      <button className="login-btn" onClick={handleLogout}>Logout</button>
    </div>
      <div>
    </div>
    </nav>
    </div>
  );
};

export default NavBar;