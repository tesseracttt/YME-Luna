import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import Job from "./pages/job";
import Bot from "./pages/bot";
import Guide from "./pages/guide";
import Profile from "./pages/profile";

function App() {
    return (
        <Router>
            {/* <SideBar /> */}
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/jobs" exact component={Job} />
                <Route path="/feed" exact component={Bot} />
                <Route path="/chat" exact component={Guide} />
                <Route path="/profile" exact component={Profile} />
            </Switch>
        </Router>
    );
}

export default App;
