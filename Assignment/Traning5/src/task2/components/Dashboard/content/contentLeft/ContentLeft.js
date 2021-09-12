import React from 'react';
import './ContentLeft.css'; 
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import RouteWithSubRoutes from '../../../RouteWithSubRoutes/RouteWithSubRoutes';


const ContentLeft  = ({routes}) => {


    return (
        <Router>
            <div className="container--content--left">
                
                {routes.map((route, i) => (
                    <Link key={i} to={route.path} className="chose--item">{route.nameRow}</Link> 
                ))}

            </div>
            <Switch>
                {routes.map((route, i) => (
                    <RouteWithSubRoutes key={i} {...route}/>
                ))}
               
                <Route path="/*">
                    <Redirect to="/app" />
                </Route>
            </Switch>
        </Router>
    );
}

export default ContentLeft;