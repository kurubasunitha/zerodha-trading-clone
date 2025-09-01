import React from "react";
import "./SideTable.css";
import { CiSearch } from "react-icons/ci";
import { IoFilterOutline } from "react-icons/io5";
import DataTable from "../DataTable/DataTable";

function SideTable(){
  return(
    <div className="Sidebar-container">
     <div className="searchbar">
      <div className="search-icon-container">
       <CiSearch className="search-icon" />
       <input type="text"
           className="input-con"
           placeholder="Search eg: infy bse, nifty fut, index fund"  
      />
      <IoFilterOutline  className="search-icon"/>
      </div>
      <div className="watchlist-container">
        <p className="watchlist">Watchlist 1</p>
        <p className="newgroup">+ New group</p>
      </div>
      <div>
      <DataTable/>
      </div>
      </div>
    </div>
      
        )
}
export default SideTable;