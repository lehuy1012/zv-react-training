import React from 'react';
import { Route } from 'react-router';


const RouteWithSubRoutes = (route) =>
{   
    return (
        <Route path={route.path}
        render = {props => (
            <route.component {...props} routes={route.routes} info={route.info}/>
        )} />
    );
}

export default RouteWithSubRoutes;