import React, { useContext } from "react"
import { Route, Switch } from "react-router-dom"
import Login from "../forms/Login"
import Profile from "../forms/Profile"
import Signup from "../forms/Signup"
import CompanyDetail from "./company/CompanyDetail"
import CompanyList from "./company/CompanyList"
import Context from "./Context"
import Home from "./Home"
import JobList from "./job/JobList"
import NotFound from "./NotFound"
import PrivateRoute from "./PrivateRoute"

const Routes = () => {
    const { currentUser } = useContext(Context)

    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <PrivateRoute exact path="/companies">
                    <CompanyList />
                </PrivateRoute>
                <PrivateRoute exact path="/companies/:handle">
                    <CompanyDetail />
                </PrivateRoute>
                <PrivateRoute exact path="/jobs">
                    <JobList />
                </PrivateRoute>
                <Route exact path="/login">
                    <Login />
                </Route>
                <Route exact path="/signup">
                    <Signup />
                </Route>
                <PrivateRoute exact path="/profile">
                    <Profile />
                </PrivateRoute>
                <Route>
                    <NotFound />
                </Route>
            </Switch>
        </div>
    )
}

export default Routes