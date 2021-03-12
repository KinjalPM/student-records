import React from 'react';
import { Link ,Redirect,useHistory} from "react-router-dom";
import { BrowserRouter,Switch,Route} from "react-router-dom";
import Dashboard from './Component/Dashboard/Dashboard';
import EditRec from './Component/EditRecords/EditRec'
import Login from './Component/Login/Login';
import Logout from './Component/Login/Logut'
import { useAuth0 } from "@auth0/auth0-react";
import Spinner from '@material-ui/core/LinearProgress';
import App from './App'
import Plot from './Component/Plot/Plot'
function Router(){
    // const {
    //     isLoading,
    //     isAuthenticated,
    //     error,
    //     user,
    //     loginWithRedirect,
    //     logout,
    //   } = useAuth0();

      const history= useHistory()

      // console.log( 
      //   isAuthenticated,
      //   'DATA FROM AUTHO')

      //   if(isLoading) {
      //     return <Spinner />
      //   }

        
    return (
      <div>
      <BrowserRouter>
      <Switch>         
      <Route path="/dashboard" component={Dashboard} />  
      <Route path="/visualization" component={Plot} />
      <Route path ='/editrec/:id'  component = {EditRec} />       
        <Route path="/" component={App} />  
        
     </Switch>
     </BrowserRouter>
  </div>
  
    )

}

export default Router