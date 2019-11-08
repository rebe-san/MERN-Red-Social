import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

// Views

import Login from './views/Login';
import Feed from './views/Feed';
import AboutUs from './views/About-us';
import Profile from './views/Profile';



//Component
class App extends Component {
    render() {
        console.log(window.location.pathname);
        return (
            <Router>
                {/* <Router basename = { window.location.pathname || '' } > */}
                <Switch >
                    <Route exact path='/' component={Login} />
                    <Route exact path='/feed' component={Feed} />
                    <Route exact path='/about-us' component={AboutUs} />
                    <Route exact path='/profile' component={Profile} />
                </Switch>
            </Router >
        )
    };
}

export default App;