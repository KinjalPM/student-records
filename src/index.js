import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Router from './Router'
import RecordDetails from './Component/RecordDetails/RecordDetails'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Switch,Route} from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";


ReactDOM.render(

  <div>
     <Auth0Provider
    // domain="studentbe.us.auth0.com"
    // clientId="3DCohTEvcsLiGuvu68w0jpJEtj6SaU39"
    domain={process.env.REACT_APP_AUTH0_DOMAIN}
    clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
    redirectUri={window.location.origin}
  >
    <Router/>
    </Auth0Provider>
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
