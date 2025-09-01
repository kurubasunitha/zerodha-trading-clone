import React from "react";
import "./Orders.css";
import { Link, NavLink} from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { FaFileContract } from "react-icons/fa";
import { FaCircleNotch } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa6";
import SideTable from "../SideTable/SideTable";


function Orders(){

  return(
    <div className="orders-container">
        <SideTable/>
     <div className="Order-section">
        <div className="navlink-container">
            <ul className="ul-navlink-container">
            <NavLink to="Orders" className="navlink"><li> orders</li></NavLink>
            <NavLink to="GTT" className="navlink"><li> GTT</li></NavLink>
            <NavLink to="Baskets" className="navlink"><li> Baskets</li></NavLink>
            <NavLink to="SIP" className="navlink"><li> SIP</li></NavLink>
            <NavLink to="Alerts" className="navlink"><li> Alerts</li></NavLink>
            </ul>
        </div>
      <div className="header-container">
        <div className="header-section">
           <div className="Executed">Executed orders(1)</div>
           <div className="search-container">
            <div className="search-icon"><IoSearch /></div>
            <div className="search-input">
                <input
                 type="text"
                 placeholder="Search"
                 className="inputText"
                /></div>
           </div>
           <div className="Contract-header-container">
             <div>
              <FaFileContract />
                Contract note
             </div>
             <div>
              <FaCircleNotch />
                View history
             </div>
             <div>
              <MdOutlineFileDownload />
                Download
             </div>
           </div>
        </div>
      </div>
        <div className="Table-container">
          <table>
                <thead className="table-header-container">
                    <tr className="head-row">
                        <th>Time</th>
                        <th>Type</th>
                        <th>instrument</th>
                        <th>Product</th>
                        <th>Qty.</th>
                        <th>Avg.price</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody className="table-body-container">
                        <tr className="body-row">
                            <td className="number">12:24:27</td>
                            <td className="buy">
                              <button type="button" class="btn_buy">BUY</button>
                            </td>
                            <td className="MAXHEAL">MAXHEALTH <span>NSE</span></td>
                            <td className="cnc">CNC</td>
                            <td className="container">0/1</td>
                            <td className="number2">1,275.10</td>
                            <td className="cancelled">CANCELLED AMO</td>
                        </tr>
                    </tbody>
                </table>
           
          
           </div>
           <div className="Trades-container">
            <p className="Trades-text">Trades</p>
              <FaAngleDown className="Trade-icon"/>
            </div> 
             
     </div>   
     </div>
     
        
    )
};
export default Orders;