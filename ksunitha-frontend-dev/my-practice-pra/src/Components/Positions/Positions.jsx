import React from 'react';
import './Positions.css';
import { useSelector } from 'react-redux';
import SideTable from '../SideTable/SideTable';
import UsbIcon from '@mui/icons-material/Usb';
function Positions(){
      
   
    return(
        <>
        <div className="position-container">
            <SideTable/>
            <div className="position-section">
              <div className="icon heading" >
                <div className="position-icon">
                  <  UsbIcon/ >
                  <h3 className="icon-text">You don't have any positions yet</h3>
                  </div>
              </div>
            </div>
        </div>
       </>
    )
};
export default Positions;