import React from "react";
import SideTable from "../SideTable/SideTable";
import { BiCircleThreeQuarter } from "react-icons/bi";
import { MdOutlineQueryBuilder } from "react-icons/md";
import { RxQuestionMark } from "react-icons/rx";
import { FiDroplet } from "react-icons/fi";
import { Grid, Paper } from "@mui/material"; 
import "./Funds.css";

function Funds() {
  return (
    <>
      <div className="funds-container">
        <SideTable />

        <div className="funds-section">
          
          <div className="funds-headings">
            <p className="upitext">
              Instant, zero-cost transfers with{" "}
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrORIBDqjS1DwzOSoWbblNh3luKSwTQ_FdNA&s"
                alt="upi"
                style={{ width: "35px" }}
              />
            </p>
            <div>
              <button className="addfunds">Add funds</button>
            </div>
            <div>
              <button className="withdraw">Withdraw</button>
            </div>
          </div>

          
          <div className="equityheading">
            <BiCircleThreeQuarter className="equtyicon" />
            <p className="equitytext">Equity</p>
            <MdOutlineQueryBuilder className="viewicon" />
            <p className="viewtext">View statement</p>
            <RxQuestionMark className="helpicon" />
            <p className="helptext">Help</p>

            <FiDroplet className="commoicon" />
            <p className="commotext">Commodity</p>
            <MdOutlineQueryBuilder className="viewicon2" />
            <p className="viewtext2">View statement</p>
            <RxQuestionMark className="helpicon2" />
            <p className="helptext2">Help</p>
          </div>

          
          <div className="gridtable" >
            <Grid container spacing={6}>
              <Grid item xs={6}>
                <Paper style={{  width:500, backgroundColor:"rgb(38, 37, 37)",  border: "1px solid #444"    }}>
                  <div className="equity-container">
                  <p className="available">Available margin<span>383.89</span></p>
                  <p className="used">Used margin <span>0.00</span></p>
                  <p className="availablecash">Available cash <span>379.46</span></p>
                  <p className="opening">Opening balance<span>0.00</span></p>
                  <p className="payin">Payin<span>0.00</span></p>
                  <p className="span">Span<span>0.00</span></p>
                  <p className="delivery">Delivery margin<span>0.00</span></p>
                  <p className="exposure">Exposure<span>0.00</span></p>
                  <p className="option">Options premium<span>0.00</span></p>
                  <p className="collLi">Collateral(Liquid funds)<span>0.00</span></p>
                  <p className="colleqi">Collateral(Equity)<span>0.00</span></p>
                  <p className="total">Total Collateral<span>0.00</span></p>
                  </div>
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper style={{ width:500, backgroundColor:"rgb(38, 37, 37)", border: "1px solid #444" }}>
                  <div className="commidity-container">
                   <p className="available">Available margin<span>0.00</span></p>
                  <p className="used">Used margin <span>0.00</span></p>
                  <p className="availablecash">Available cash <span>0.00</span></p>
                  <p className="opening">Opening balance<span>0.00</span></p>
                  <p className="payin">Payin<span>0.00</span></p>
                  <p className="span">Span<span>0.00</span></p>
                  <p className="delivery">Delivery margin<span>0.00</span></p>
                  <p className="exposure">Exposure<span>0.00</span></p>
                  <p className="option2">Options premium<span>0.00</span></p>
                  </div>
                </Paper>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </>
  );
}

export default Funds;
