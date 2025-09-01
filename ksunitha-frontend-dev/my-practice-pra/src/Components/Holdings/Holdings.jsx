import React from 'react';
import './Holdings.css';
import { useAuth } from '../AuthProvider/AuthProvider';
import  {useSelector}  from 'react-redux';
import SideTable from '../SideTable/SideTable';
import { FaAngleDown } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
function Holdings(){
  
    const holdings = useSelector((state) => state.HoldingsForm.value);


    return(
        <>
         <div className="holdings-container">
          <SideTable/>
          <div className="holdings-section">
           <div className="holdings-subsection">
            <h4 className="holdheading">Holdings</h4>
           <p className="allquantity">All Quantity <FaAngleDown /></p>
           <p className="searchcon"><CiSearch /> Search</p>
             <p className="fnd">Family</p>
              <p className="fnd">Analytics</p>
              <p className="fnd">Downloads</p>
           </div>
         <div className="subheading-section">
           <p>Total Investments</p>
           <p>Current Value</p>
           <p>Day's P&L</p>
           <p>Total P&L</p>
         </div>
         <div className="subheading-numbers">
           <p className="num1">3,85490</p>
           <p className="num2">2,46651</p>
           <p className="num3">3,85490</p>
           <p className="num4">3,85490</p>
         </div>
           <table className="table-container">
            <thead>
            <tr>
      <th>Instrument</th>
      <th>Quantity</th>
      <th>Avg Cost</th>
      <th>LTP</th>
      <th>Invested</th>
      <th>Current Value</th>
      <th>P&L</th>
      <th>Net Change</th>
            </tr>
            </thead>
            <tbody>
                {holdings.map((item, index) => (
      <tr key={index}>
        <td>{item.instrument}</td>
        <td>{item.quantity}</td>
        <td>{item.avgCost}</td>
        <td>{item.ltp}</td>
        <td>{item.invested}</td>
        <td>{item.currentValue}</td>
        <td>{item.pnl}</td>
        <td>{item.netChange}</td>
        <td>{item.dayChange}</td>
      </tr>
    ))}
            </tbody>
           </table>
          </div>
        </div>
         
         
        </>
       
    )
}
export default Holdings;


