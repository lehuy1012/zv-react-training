import React from 'react';
import LoginTask2 from './pages/LoginPage/LoginPage';
import HomePageTask2 from './pages/HomePage/HomePage';
import {BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import ProtectRouter from "./components/ProtectRouter/ProtectRouter";




const App = () => {

    return (
        <Router>
            <Switch>
            
               <Route exact path="/login" component={LoginTask2} />
           
               <ProtectRouter path="/app" loggedIn={localStorage.getItem('token')} component={HomePageTask2}/>
           
               <Route exact path="*">
                  <Redirect to="/app" />
               </Route>
           </Switch>
        </Router>
    );

}

export default App;
