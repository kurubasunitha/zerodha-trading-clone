import React from 'react';
import './Bids.css';
import { useSelector } from 'react-redux';
import SideTable from '../SideTable/SideTable';
import { CiSearch } from "react-icons/ci";

function Bids() {
  const bids = useSelector((state) => state.BidsForm.value);

  return (
    <>
      <div className="bids-container">
        <SideTable />
        <div className="bids-section">
          <div className="heading-section">
            <p className="ipo">IPOs</p>
            <p className="text-ipo"><CiSearch /> Search</p>
          </div>
          <table className="table-container">
            <thead>
              <tr>
                <th>Instrument</th>
                <th>Date</th>
                <th>Price</th>
                <th>Min.amount</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {bids.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.date}</td>
                  <td>{item.range}</td>
                  <td>{item.price}</td>
                  <td><button className="apply-btn">{item.action}</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Bids;
