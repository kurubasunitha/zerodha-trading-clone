import { useState } from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import LoginPage from './Components/LoginPage/LoginPage';
import Orders from './Components/Orders/Orders';
import DashBoard from './Components/DashBoard/DashBoard';
import Holdings from './Components/Holdings/Holdings';
import Positions from './Components/Positions/Positions';
import Bids from './Components/Bids/Bids';
import Funds from './Components/Funds/Funds';
import ProtectedRoutes from './Components/ProtectedRoutes/ProtectedRoutes';
import {  Route, Routes, useLocation} from "react-router-dom";
import { AuthProvider } from './Components/AuthProvider/AuthProvider';


function App() {
  const [count, setCount] = useState(0)
  
  const location = useLocation();

  
  return (
     <>
      {location.pathname === "/" ? null : <NavBar />}
      <AuthProvider>
       <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/dashboard" element={
          <ProtectedRoutes>
          <DashBoard/>
          </ProtectedRoutes>
          }/>
        <Route path="/orders" element={
          <ProtectedRoutes>
          <Orders/>
          </ProtectedRoutes>
          }/>
        <Route path="/holdings" element={
          <ProtectedRoutes>
          <Holdings/>
          </ProtectedRoutes>
          } />
        <Route path="/positions" element={
          <ProtectedRoutes>
          <Positions/>
          </ProtectedRoutes>
          }/>
        <Route path="/bids" element={
          <ProtectedRoutes>
          <Bids/>
          </ProtectedRoutes>
          }/>
        <Route path="/funds" element={
          <ProtectedRoutes>
          <Funds/>
          </ProtectedRoutes>
          }/>
       </Routes>
       </AuthProvider>
      </>
  )
}

export default App
