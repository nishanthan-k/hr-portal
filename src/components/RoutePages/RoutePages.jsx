import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Dashboard from '../../pages';
import Login from "../../pages/Login/Login";
import Account from "../../pages/Account/Account";

function RoutePages() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/dashboard" component={Dashboard}/>
                <Route path="/account" component={Account}/>
            </Switch>
        </BrowserRouter>
    )
}

export default RoutePages;