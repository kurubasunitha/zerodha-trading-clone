import { createSlice, createAsyncThunk, buildCreateSlice } from '@reduxjs/toolkit'
import axios from 'axios';

export const handleloginAuthenticationGlobally=createAsyncThunk(
  'LoginForm/authentication',
  async ({userId, password})=>{
    const response= await axios.post(
            "https://api.escuelajs.co/api/v1/auth/login",
     {
        email: userId,
        password: password,
     });
    return response.data
  }
)




   //initialState ni globalstate 
const initialState = {
  value :0,
  userId:"",
  password:"",
  isLoading: false,
  error: null,
  responseData: [],
}
export const LoginSlice = createSlice({
  name: 'Login_Form',
  initialState,
  reducers: {
  userIdGlobally: (state, action) => {
      state.userId = action.payload
      
    },
    passwordGlobally: (state,action) => {
      state.password = action.payload
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
  
 extraReducers:(builder) =>{
   builder
  .addCase(handleloginAuthenticationGlobally.pending,
    (globalState)=>{
    globalState.isLoading=true;
    globalState.error=null;
  })
  .addCase(handleloginAuthenticationGlobally.fulfilled,
    (globalState, action)=>{
    globalState.isLoading=false;
    globalState.responseData=action.payload;
    
  })
  
 }
})

export const { userIdGlobally, passwordGlobally, incrementByAmount } = LoginSlice.actions

export default LoginSlice.reducer