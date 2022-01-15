import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom";

//Importing Components
import Home from "../Pages/Home";
import AssignTray from "../Pages/AssignTray";
import Login from "../Pages/Login";
import TrayManagement from "../Pages/TrayManagement";

class AppRouter extends React.Component {
    render() {
        return (
            <Router>
                <Route exact path="/" component={Home} />
                <Route exact path="/assign_tray" component={AssignTray} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/tray_management" component={TrayManagement} />
            </Router>
        )
    }
}
export default AppRouter;