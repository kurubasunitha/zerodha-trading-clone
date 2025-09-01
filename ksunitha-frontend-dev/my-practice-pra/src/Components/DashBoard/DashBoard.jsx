import React, { PureComponent } from "react";
import { LineChart } from "@mui/x-charts/LineChart";

import SideTable from "../SideTable/SideTable";
import "./DashBoard.css";


const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

function DashBoard() {
  
  return (
    <div className="dashboard-container">
      <SideTable />
      <div className="dashboard-section">
        <div className="dashboard-header-container">
          <h1 className="exicuted-orders">Hi, Sunitha </h1>
        </div>
        <div className="middile-portion">
          <div className="commodity-header">
            <div className="equity">Equity</div>
            <div className="commodity">Commodity</div>
          </div>

          <div className="equity-commodity-con">
            <div className="equity-table">
              <div className="margin-available-container">
                <div className="bold-text">450.10</div>
                <p>Margin Available</p>
              </div>

              <div className="margin-available-con">
                <p>Margin used 0</p>
                <p>
                  Opening balance <span>450.10</span>
                </p>
                <div className="view-statement">View statement</div>
              </div>
            </div>
            <div className="equity-table" equity-table>
              <div className="margin-available-container">
                <div className="bold-text">0</div>
                <p>Margin Available</p>
              </div>
              <div className="margin-available-con">
                <p>
                  Margin used <span>450.10</span>
                </p>
                <p>
                  Opening balance <span>450.10</span>
                </p>
                <div className="view-statement">View statement</div>
              </div>
            </div>
          </div>
        </div>

        <LineChart
          xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
          series={[
            {
              data: [2, 5.5, 2, 8.5, 1.5, 5],
            },
          ]}
          height={300}
        />
      </div>
      <div></div>
    </div>
  );
};

export default DashBoard;