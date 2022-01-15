import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom";

//Importing Components
import Home from "../Pages/Home";
import AssignTray from "../Pages/AssignTray";

class AppRouter extends React.Component {
    render() {
        return (
            <Router>
                <Route exact path="/" component={Home} />
                <Route exact path="/assign_tray" component={AssignTray} />
            </Router>

        )
    }
}
export default AppRouter;