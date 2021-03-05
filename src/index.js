import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Router from './Component/Router/Router'
import RecordDetails from './Component/RecordDetails/RecordDetails'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Switch,Route} from "react-router-dom";
ReactDOM.render(
  <div>
    <BrowserRouter>
      <Switch>
        {/* <Route path='/' component={Router} /> */}
      <Route path="/recordsdetails/:Id" component={RecordDetails}/>
      <Route path="/" component={App} />  
      </Switch>  
    </BrowserRouter>
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
