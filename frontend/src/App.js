import React from 'react'
import './App.css';
import LAYOUT from './components/layout';
import {BrowserRouter} from 'react-router-dom';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import InformationState from './context/information/informationState';
import setAuthToken from './utils/setAuthToken';


if(localStorage.token){
  setAuthToken(localStorage.token)
}

function App() {
  return (
   <div>
     <AuthState>
      <InformationState>
      <AlertState>
     <BrowserRouter>
     <LAYOUT/>
     </BrowserRouter>
     </AlertState>
     </InformationState>
     </AuthState>
   </div>
  );
}

export default App;
