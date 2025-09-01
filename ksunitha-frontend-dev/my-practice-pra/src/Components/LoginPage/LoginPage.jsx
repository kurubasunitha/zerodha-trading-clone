import React,{useState} from 'react';
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import './LoginPage.css';
import { useDispatch, useSelector } from 'react-redux';
import { userIdGlobally, passwordGlobally} from '../../Redux/Slices/LoginSlice';
import {handleloginAuthenticationGlobally} from '../../Redux/Slices/LoginSlice';
 
function LoginPage({countValue}){
   const dispatch=useDispatch();
   const navigate = useNavigate();
   const {userId, password, isLoading}=useSelector((globalState)=>globalState.LoginForm)
   console.log("globalState", userId, password, isLoading);

   function handleuserName(event){
    dispatch(userIdGlobally(event.target.value))
    }
    function handleuserPassword(event){
     dispatch(passwordGlobally(event.target.value))
     
    } 
    async function userSubmitbutton(event){
       event.preventDefault();
       console.log('onClick', userId, password);
       try {
      
         const url = await axios.post("https://api.escuelajs.co/api/v1/auth/login",
            {
           email: userId,
        password: password,
     });
     const Response = await url.data.access_token;
     if(userId==="john@mail.com" &&  password==="changeme"){
       localStorage.setItem("access_token", Response);
       
         navigate("Dashboard");
      }
      else{
         alert("Invalid userId or password")
      }
      } catch (error) {
         console.log(error);
         alert("Invalid userId and password");
        }
      };
   

   return(
     
        <>
        
        <div className="login-page-container">
            <form className="form-container">
               <header className="logo-container">
                <img src="https://kite.zerodha.com/static/images/kite-logo.svg"
                  width={60}
                  height={60}
                  alt="website-logo"
                  />
                 </header>
                 
    {isLoading ? <div class="loader"></div> : null}
                 
               <h1 className="logo-heading">Login to Kite</h1>
               <div className="input-container">
               <label className="input-label">
                phone or User ID 
               </label>
               <input
                  type="text"
                  className="userId"
                  placeholder="phone or User ID"
                  required
                  className="input-field"
                  onChange={handleuserName}
               />
               </div>
               <div className="input-container">
               <label className="input-label">
                password
               </label>
               <input
                  type="password"
                  className="password"
                  placeholder="password"
                  required
                  className="input-field"
                  onChange={handleuserPassword}
               />
               </div>
               <div>
            <button
             type="submit" className="login-button"
              onClick={userSubmitbutton}
               >Login</button>
              </div>
              <div>
                <a href="#" className="forgot-link"><p>Forgot user ID or password?</p></a>
              </div>
              
                </form>
         </div>
         
         
         
        </>
    )
};
export default LoginPage;